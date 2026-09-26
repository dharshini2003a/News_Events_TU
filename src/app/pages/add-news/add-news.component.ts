import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventDateGroup, NewsItem } from '../../core/models/news.data';
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
export class AddNewsComponent implements OnInit {
  @ViewChild('coverInput') coverInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('galleryInput') galleryInputRef!: ElementRef<HTMLInputElement>;

  categoryOptions: string[];

  // When set, we're editing this existing news item instead of creating one.
  editId: number | null = null;

  // Basic fields
  title = '';
  category = '';
  newsType: 'News' | 'Event' = 'News';
  startDate = new Date().toISOString().slice(0, 10);
  endDate = '';
  shortDesc = '';
  tagInput = '';
  tags = signal<string[]>(['Salem', 'CME', 'Aurolab']);
  details = '';
  status = 'Published';

  // Cover image (single) — this becomes the news/event thumbnail.
  coverImage = signal<ImagePreview | null>(null);
  coverDragOver = signal(false);

  // Photo gallery (multiple)
  galleryImages = signal<ImagePreview[]>([]);
  galleryDragOver = signal(false);

  // Gallery organization (only meaningful for Event type)
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
    this.details = (n.body || []).join('\n\n');

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

  // ---------- Tags ----------
  addTag(e: KeyboardEvent): void {
    if ((e.key === 'Enter' || e.key === ',') && this.tagInput.trim()) {
      e.preventDefault();
      const clean = this.tagInput.trim().replace(/,$/, '');
      if (clean && !this.tags().includes(clean)) {
        this.tags.update((t) => [...t, clean]);
      }
      this.tagInput = '';
    }
  }

  removeTag(tag: string): void {
    this.tags.update((t) => t.filter((x) => x !== tag));
  }

  // ---------- Cover image ----------
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

  // ---------- Photo gallery ----------
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

  // ---------- Event date grouping ----------
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
        // A photo belongs to only one date — unassign it from any other group.
        return { ...g, photos: g.photos.filter((x) => x !== imageId) };
      })
    );
  }

  photoCount(group: EventDateGroup): number {
    return group.photos.length;
  }

  // ---------- Submit ----------
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
    const bodyParagraphs = this.details
      .split(/\n{2,}|\n/)
      .map((p) => p.trim())
      .filter(Boolean);

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
      body: bodyParagraphs.length ? bodyParagraphs : [this.shortDesc],
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