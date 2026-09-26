import { Component, signal } from '@angular/core';
import { NewsService } from '../../core/services/news.service';
import { AdminSidebarComponent } from '../../shared/components/admin-sidebar/admin-sidebar.component';

interface GalleryPhoto {
  url: string;
  title: string; 
  date: string;
}

@Component({
  selector: 'app-admin-gallery',
  standalone: true,
  imports: [AdminSidebarComponent],
  templateUrl: './admin-gallery.component.html',
})
export class AdminGalleryComponent {
  photos: GalleryPhoto[];
  openPhoto = signal<GalleryPhoto | null>(null);

  constructor(private newsService: NewsService) {
    const all = this.newsService.getAll();
    // Flatten every news/event's cover + gallery photos into one big list.
    this.photos = all.flatMap((n) => {
      const urls = [n.thumbnail, ...(n.gallery || [])];
      const unique = Array.from(new Set(urls));
      return unique.map((url) => ({
        url,
        title: n.title,
        date: this.newsService.formatDate(n.date),
      }));
    });
  }

  view(photo: GalleryPhoto): void {
    this.openPhoto.set(photo);
  }

  closePhoto(): void {
    this.openPhoto.set(null);
  }
}