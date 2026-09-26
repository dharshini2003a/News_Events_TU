import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsItem } from '../../core/models/news.data';
import { NewsService } from '../../core/services/news.service';
import { PhotoCarouselComponent } from '../../shared/components/photo-carousel/photo-carousel.component';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [RouterLink, PhotoCarouselComponent],
  templateUrl: './news-detail.component.html',
})
export class NewsDetailComponent {
  news: NewsItem | undefined;
  additionalPhotos: string[] = [];

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.news = this.newsService.getById(id);
    if (this.news) {
      this.additionalPhotos = (this.news.gallery || []).filter((g) => g !== this.news!.thumbnail);
    }
  }

  formatDate = (d: string) => this.newsService.formatDate(d);

  hashtag(text: string): string {
    return text.replace(/\s+/g, '');
  }
}
