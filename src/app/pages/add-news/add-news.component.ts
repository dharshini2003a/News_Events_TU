import { AfterViewInit, Component, ElementRef, HostListener, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventDateGroup, KeywordGroup, NewsItem } from '../../core/models/news.data';
import { NewsService } from '../../core/services/news.service';
import { AdminSidebarComponent } from '../../shared/components/admin-sidebar/admin-sidebar.component';

interface ImagePreview {
  id: string;
  url: string;
  name: string;
}

@Component({
  selector: 'app-add-news',
  standalone: true,
  imports: [FormsModule, AdminSidebarComponent],
  templateUrl: './add-news.component.html',
})
export class AddNewsComponent implements OnInit, AfterViewInit {
  @ViewChild('coverInput') coverInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('galleryInput') galleryInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('detailsEditor') detailsEditorRef!: ElementRef<HTMLDivElement>;

  categoryOptions: string[];

  editId: number | null = null;

  title = '';
  category = '';
  newsType: 'News' | 'Event' = 'News';
  startDate = new Date().toISOString().slice(0, 10);
  endDate = '';
  shortDesc = '';
  keywordGroups: KeywordGroup[];
  keywordOpen = signal(false);
  keywordSearch = signal('');
  tags = signal<string[]>([]);
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
    this.keywordGroups = this.newsService.getKeywordGroups();
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

  toggleKeywordPanel(): void {
    this.keywordOpen.update((v) => !v);
  }

  filteredKeywordGroups(): KeywordGroup[] {
    const q = this.keywordSearch().trim().toLowerCase();
    if (!q) return this.keywordGroups;
    return this.keywordGroups
      .map((g) => ({ group: g.group, items: g.items.filter((i) => i.toLowerCase().includes(q)) }))
      .filter((g) => g.items.length > 0);
  }

  clearKeywords(): void {
    this.tags.set([]);
  }

  closeKeywordPanel(): void {
    this.keywordOpen.set(false);
    this.keywordSearch.set('');
  }

  isKeywordSelected(k: string): boolean {
    return this.tags().includes(k);
  }

  toggleKeyword(k: string): void {
    this.tags.update((t) => (t.includes(k) ? t.filter((x) => x !== k) : [...t, k]));
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent): void {
    if (!(e.target as HTMLElement).closest('.keyword-dropdown')) {
      this.closeKeywordPanel();
    }
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

    const payload: Partial<NewsItem> = {
      title: this.title,
      category: this.category || 'Others',
      date: this.startDate,
      shortDescription: this.shortDesc,
      keywords: this.tags(),
      body: detailsHtml ? [detailsHtml] : [this.shortDesc],
      gallery: galleryUrls,
      thumbnail: this.coverImage()!.url,
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
        centre: 'Madurai',
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