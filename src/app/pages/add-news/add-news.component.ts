import { AfterViewInit, Component, computed, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  categoryTree,
  centres,
  departmentTree,
  EventDateGroup,
  imgUrl,
  todayStr,
  newsSystemTree,
  NewsItem,
  TreeNode,
} from '../../core/models/news.data';
import { NewsService } from '../../core/services/news.service';
import { AdminSidebarComponent } from '../../shared/components/admin-sidebar/admin-sidebar.component';

interface ImagePreview {
  id: string;
  url: string;
  name: string;
}

interface TreeRow {
  node: TreeNode;
  depth: number;
  key: string;
  isLeaf: boolean;
  open: boolean;
}

@Component({
  selector: 'app-add-news',
  standalone: true,
  imports: [FormsModule, AdminSidebarComponent],
  templateUrl: './add-news.component.html',
  styles: [`
    .tree-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
    @media (max-width: 1100px) { .tree-grid { grid-template-columns: 1fr; } }
    .tree-title { font-weight: 600; font-size: 13px; margin-bottom: 6px; color: #152642; }
    .tree-box { height: 320px; overflow: auto; border: 1px solid #cfd6e0; border-radius: 6px; background: #fff; padding: 6px 0; }
    .tree-row { font-size: 13px; line-height: 1.9; white-space: nowrap; display: flex; align-items: center; gap: 6px; padding-left: 8px; }
    .meta-row { display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-start; margin-bottom: 18px; }
    .meta-row .form-field { flex: 1 1 200px; min-width: 180px; margin: 0; }
    .meta-row .type-field { flex: 0 0 auto; min-width: 0; }
    .meta-row .form-field > label { display: block; height: 18px; line-height: 18px; margin: 0 0 8px; }
    .meta-row input[type='date'] { width: 100%; box-sizing: border-box; height: 44px; }
    .meta-row .type-toggle { height: 44px; box-sizing: border-box; display: inline-flex; align-items: center; padding: 3px; margin: 0; }
    .meta-row .type-toggle-option { height: 100%; box-sizing: border-box; display: inline-flex; align-items: center; margin: 0; padding: 0 16px; }
    .show-hint { font-size: 12px; color: #6b7686; margin: -6px 0 18px; }
    .tree-guides { flex: none; align-self: stretch; background-image: repeating-linear-gradient(to right, transparent 0 8px, #c3cbd8 8px 9px, transparent 9px 18px); }
    .tree-leaf { display: inline-flex; align-items: center; gap: 6px; cursor: pointer; margin: 0; font-weight: 400; }
    .tree-leaf input, .tree-row > input { width: auto; margin: 0; }
    .tree-toggle { background: none; border: 0; padding: 0; cursor: pointer; font: inherit; font-weight: 600; color: #152642; display: inline-flex; align-items: center; gap: 6px; }
    .tree-sign { display: inline-block; width: 14px; height: 14px; line-height: 12px; text-align: center; border: 1px solid #8a97ab; border-radius: 2px; font-size: 12px; background: #f5f7fb; }
  `],
})
export class AddNewsComponent implements OnInit, AfterViewInit {
  @ViewChild('coverInput') coverInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('galleryInput') galleryInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('detailsEditor') detailsEditorRef!: ElementRef<HTMLDivElement>;

  imgUrl = imgUrl; // used in the template for existing / uploaded image previews

  editId: number | null = null;

  title = '';
  newsType: 'News' | 'Event' = 'News';
  startDate = todayStr();
  showFrom = todayStr(); // news is visible to users from this date ...
  showTo = ''; // ... until this date, then it moves to Archives (still stored)
  endDate = '';
  tags = signal<string[]>([]); // every ticked item from the 3 trees ends up here (saved as keywords)

  // ---------- 3 tree panels (News System / Department / News Category) ----------
  treePanels = [
    { title: 'News System', nodes: newsSystemTree },
    { title: 'Department', nodes: departmentTree },
    { title: 'News Category', nodes: categoryTree },
  ];
  // the first branch of every panel is open at the start
  expanded = signal<Set<string>>(this.allBranchKeys());
  panelRows = computed(() => this.treePanels.map((p, i) => this.buildRows(p.nodes, i)));
  details = ''; // raw HTML from the rich-text editor
  private pendingDetailsHtml = '';
  status = 'Published';

  coverImage = signal<ImagePreview | null>(null);
  coverDragOver = signal(false);

  galleryImages = signal<ImagePreview[]>([]);
  galleryDragOver = signal(false);

  galleryOrg: 'general' | 'byDate' = 'general';
  dateGroups = signal<EventDateGroup[]>([]);
  newGroupDate = '';
  activeGroupIndex = signal<number | null>(null);

  constructor(
    private newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const editParam = this.route.snapshot.queryParamMap.get('edit');
    if (editParam) {
      const existing = this.newsService.getById(editParam);
      if (existing) this.prefillFrom(existing);
    }
  }

  private prefillFrom(n: NewsItem): void {
    this.editId = n.id;
    this.title = n.title;
    this.newsType = n.isEvent ? 'Event' : 'News';
    this.startDate = n.date;
    if (n.showFrom) this.showFrom = n.showFrom;
    this.showTo = n.showTo || '';
    this.endDate = n.endDate || '';
    this.tags.set([...n.keywords]);
    this.pendingDetailsHtml = (n.body || []).join('');

    if (n.thumbnail) {
      this.coverImage.set({ id: 'existing-cover', url: n.thumbnail, name: n.thumbnail });
    }
    this.galleryImages.set(
      (n.gallery || []).map((url, i) => ({ id: `existing-${i}-${url}`, url, name: url }))
    );
    if (n.dateGroups && n.dateGroups.length) {
      this.galleryOrg = 'byDate';
      // Map stored photo URLs back to the imageIds used in this form session.
      this.dateGroups.set(
        n.dateGroups.map((g) => ({
          date: g.date,
          photos: g.photos
            .map((url) => this.galleryImages().find((img) => img.url === url)?.id)
            .filter((x): x is string => !!x),
        }))
      );
    }
  }

  // every parent node starts open, so the full tree is visible straight away
  private allBranchKeys(): Set<string> {
    const keys = new Set<string>();
    const walk = (list: TreeNode[], parentKey: string): void => {
      for (const node of list) {
        const key = `${parentKey}/${node.name}`;
        if (node.children?.length) {
          keys.add(key);
          walk(node.children, key);
        }
      }
    };
    this.treePanels.forEach((p, i) => walk(p.nodes, String(i)));
    return keys;
  }

  private buildRows(nodes: TreeNode[], panelIndex: number): TreeRow[] {
    const open = this.expanded();
    const rows: TreeRow[] = [];
    const walk = (list: TreeNode[], depth: number, parentKey: string): void => {
      for (const node of list) {
        const key = `${parentKey}/${node.name}`;
        const isLeaf = !node.children?.length;
        const isOpen = open.has(key);
        rows.push({ node, depth, key, isLeaf, open: isOpen });
        if (!isLeaf && isOpen) walk(node.children!, depth + 1, key);
      }
    };
    walk(nodes, 0, String(panelIndex));
    return rows;
  }

  toggleExpand(key: string): void {
    this.expanded.update((s) => {
      const next = new Set(s);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  clearKeywords(): void {
    this.tags.set([]);
  }

  isKeywordSelected(k: string): boolean {
    return this.tags().includes(k);
  }

  toggleKeyword(k: string): void {
    this.tags.update((t) => (t.includes(k) ? t.filter((x) => x !== k) : [...t, k]));
  }

  removeTag(tag: string): void {
    this.tags.update((t) => t.filter((x) => x !== tag));
  }


  handleCoverFiles(fileList: FileList): void {
    const file = Array.from(fileList).find((f) => f.type.startsWith('image/'));
    if (!file) return;
    this.coverImage.set({
      id: `${file.name}-${file.lastModified}`,
      url: URL.createObjectURL(file),
      name: file.name,
    });
  }

  onCoverInputChange(e: Event): void {
    const input = e.target as HTMLInputElement;
    if (input.files) this.handleCoverFiles(input.files);
  }

  handleCoverDrop(e: DragEvent): void {
    e.preventDefault();
    this.coverDragOver.set(false);
    if (e.dataTransfer?.files?.length) this.handleCoverFiles(e.dataTransfer.files);
  }

  browseCover(): void {
    this.coverInputRef.nativeElement.click();
  }

  removeCover(): void {
    this.coverImage.set(null);
  }

  handleGalleryFiles(fileList: FileList): void {
    const files = Array.from(fileList).filter((f) => f.type.startsWith('image/'));
    const previews: ImagePreview[] = files.map((f) => ({
      id: `${f.name}-${f.lastModified}-${Math.random().toString(36).slice(2)}`,
      url: URL.createObjectURL(f),
      name: f.name,
    }));
    this.galleryImages.update((prev) => [...prev, ...previews]);
  }

  onGalleryInputChange(e: Event): void {
    const input = e.target as HTMLInputElement;
    if (input.files) this.handleGalleryFiles(input.files);
  }

  handleGalleryDrop(e: DragEvent): void {
    e.preventDefault();
    this.galleryDragOver.set(false);
    if (e.dataTransfer?.files?.length) this.handleGalleryFiles(e.dataTransfer.files);
  }

  browseGallery(): void {
    this.galleryInputRef.nativeElement.click();
  }

  removeGalleryImage(id: string): void {
    this.galleryImages.update((prev) => prev.filter((img) => img.id !== id));
    this.dateGroups.update((groups) =>
      groups.map((g) => ({ ...g, photos: g.photos.filter((i) => i !== id) }))
    );
  }

  addDateGroup(): void {
    if (!this.newGroupDate) return;
    if (this.dateGroups().some((g) => g.date === this.newGroupDate)) {
      alert('That date is already added.');
      return;
    }
    this.dateGroups.update((groups) => [...groups, { date: this.newGroupDate, photos: [] }]);
    this.newGroupDate = '';
  }

  removeDateGroup(index: number): void {
    this.dateGroups.update((groups) => groups.filter((_, i) => i !== index));
    if (this.activeGroupIndex() === index) this.activeGroupIndex.set(null);
  }

  toggleAssignMode(index: number): void {
    this.activeGroupIndex.update((cur) => (cur === index ? null : index));
  }

  isImageInActiveGroup(imageId: string): boolean {
    const idx = this.activeGroupIndex();
    if (idx === null) return false;
    return this.dateGroups()[idx]?.photos.includes(imageId) ?? false;
  }

  toggleImageInActiveGroup(imageId: string): void {
    const idx = this.activeGroupIndex();
    if (idx === null) return;
    this.dateGroups.update((groups) =>
      groups.map((g, i) => {
        if (i === idx) {
          const has = g.photos.includes(imageId);
          return { ...g, photos: has ? g.photos.filter((x) => x !== imageId) : [...g.photos, imageId] };
        }
        return { ...g, photos: g.photos.filter((x) => x !== imageId) };
      })
    );
  }

  photoCount(group: EventDateGroup): number {
    return group.photos.length;
  }


  ngAfterViewInit(): void {
    if (this.pendingDetailsHtml) {
      this.detailsEditorRef.nativeElement.innerHTML = this.pendingDetailsHtml;
      this.details = this.pendingDetailsHtml;
    }
  }

  // ---------- News Details rich-text toolbar (real WYSIWYG, like Word) ----------
  exec(command: string): void {
    this.detailsEditorRef.nativeElement.focus();
    document.execCommand(command, false);
    this.onDetailsInput();
  }

  onDetailsInput(): void {
    this.details = this.detailsEditorRef.nativeElement.innerHTML;
  }

  insertLink(): void {
    const url = prompt('Enter the link URL (e.g. https://example.com):');
    if (!url) return;
    this.detailsEditorRef.nativeElement.focus();
    document.execCommand('createLink', false, url);
    this.onDetailsInput();
  }

  // Centre is taken from the first ticked item that is a known centre (Madurai, Aurolab, LAICO...).
  private deriveCentre(): string | undefined {
    const known = centres.filter((c) => c !== 'All Locations');
    for (const tag of this.tags()) {
      const hit = known.find((c) => c.toLowerCase() === tag.toLowerCase());
      if (hit) return hit;
    }
    return undefined;
  }

  // Category is no longer typed in: it is taken from the first ticked item that matches a known category.
  private deriveCategory(): string {
    const known = this.newsService.getCategories().filter((c) => c !== 'All');
    for (const tag of this.tags()) {
      const t = tag.toLowerCase();
      if (t.length < 3) continue;
      const hit = known.find((c) => {
        const k = c.toLowerCase();
        return t === k || t.startsWith(k) || k.startsWith(t);
      });
      if (hit) return hit;
    }
    return 'Others';
  }

  // Short description is no longer typed in: it is the first part of the News Details text.
  private deriveShortDescription(): string {
    const text = (this.detailsEditorRef.nativeElement.innerText || '').replace(/\s+/g, ' ').trim();
    return text.length > 160 ? text.slice(0, 160).trimEnd() + '…' : text;
  }

  handleSubmit(status: 'Draft' | 'Published'): void {
    if (!this.title.trim()) {
      alert('Please enter a news title.');
      return;
    }
    if (!this.coverImage()) {
      alert('Please upload a cover image / thumbnail.');
      return;
    }
    if (this.newsType === 'Event' && !this.endDate) {
      alert('Please set the To date for the event.');
      return;
    }
    if (!this.showFrom || !this.showTo) {
      alert('Please set the Show from and Show to dates.');
      return;
    }
    if (this.showTo < this.showFrom) {
      alert('The Show to date cannot be before the Show from date.');
      return;
    }
    if (this.newsType === 'Event' && this.endDate < this.startDate) {
      alert('The To date cannot be before the From date.');
      return;
    }

    const galleryUrls = this.galleryImages().map((img) => img.url);
    const detailsHtml = this.details.trim();

    // Resolve date groups from imageIds -> actual photo URLs for storage.
    const resolvedGroups: EventDateGroup[] =
      this.newsType === 'Event' && this.galleryOrg === 'byDate'
        ? this.dateGroups().map((g) => ({
            date: g.date,
            photos: g.photos
              .map((id) => this.galleryImages().find((img) => img.id === id)?.url)
              .filter((x): x is string => !!x),
          }))
        : [];

    const centre = this.deriveCentre();

    const payload: Partial<NewsItem> = {
      title: this.title,
      category: this.deriveCategory(),
      date: this.startDate,
      showFrom: this.showFrom,
      showTo: this.showTo,
      shortDescription: this.deriveShortDescription(),
      keywords: this.tags(),
      body: detailsHtml ? [detailsHtml] : [],
      gallery: galleryUrls,
      thumbnail: this.coverImage()!.url,
      ...(centre ? { centre } : {}),
      isEvent: this.newsType === 'Event',
      endDate: this.newsType === 'Event' ? this.endDate : undefined,
      dateGroups: resolvedGroups.length ? resolvedGroups : undefined,
    };

    if (this.editId !== null) {
      this.newsService.updateNews(this.editId, payload);
      alert(`Updated: "${this.title}"`);
    } else {
      const newItem: NewsItem = {
        id: this.newsService.nextId(),
        centre: 'Multiple Centers', // overridden by payload.centre when a centre is ticked
        ...payload,
      } as NewsItem;
      this.newsService.addNews(newItem);
      alert(
        `${status === 'Draft' ? 'Saved as draft' : 'Published'}: "${this.title}" (${this.newsType})\n(Added to the Dashboard — in-memory only until the backend is connected.)`
      );
    }

    this.router.navigate(['/admin/dashboard']);
  }
}