import { AfterViewInit, Component, computed, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  categoryTree,
  centres,
  departmentTree,
  EventDateGroup,
  imgUrl,
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
    .tree-box { height: 230px; overflow: auto; border: 1px solid #cfd6e0; border-radius: 6px; background: #fff; padding: 6px 0; }
    .tree-row { font-size: 13px; line-height: 1.9; white-space: nowrap; display: flex; align-items: center; gap: 6px; }
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

  categoryOptions: string[];
  imgUrl = imgUrl; // used in the template for existing / uploaded image previews

  editId: number | null = null;

  title = '';
  category = '';
  newsType: 'News' | 'Event' = 'News';
  startDate = new Date().toISOString().slice(0, 10);
  endDate = '';
  shortDesc = '';
  tags = signal<string[]>([]); // every ticked item from the 3 trees ends up here (saved as keywords)

  // ---------- 3 tree panels (News System / Department / News Category) ----------
  treePanels = [
    { title: 'News System', nodes: newsSystemTree },
    { title: 'Department', nodes: departmentTree },
    { title: 'News Category', nodes: categoryTree },
  ];
  // the first branch of every panel is open at the start
  expanded = signal<Set<string>>(
    new Set(this.treePanels.map((p, i) => `${i}/${p.nodes[0].name}`))
  );
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
    this.categoryOptions = this.newsService.getCategories().filter((c) => c !== 'All');
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
    this.category = n.category;
    this.newsType = n.isEvent ? 'Event' : 'News';
    this.startDate = n.date;
    this.endDate = n.endDate || '';
    this.shortDesc = n.shortDescription;
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
      alert('Please set an end date for the event.');
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
      category: this.category || 'Others',
      date: this.startDate,
      shortDescription: this.shortDesc,
      keywords: this.tags(),
      body: detailsHtml ? [detailsHtml] : [this.shortDesc],
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