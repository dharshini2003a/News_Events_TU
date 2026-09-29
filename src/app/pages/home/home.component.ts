import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsItem } from '../../core/models/news.data';
import { NewsService } from '../../core/services/news.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  latest: NewsItem;
  strip: NewsItem[];

  quickOpen = signal(false);

  constructor(private newsService: NewsService) {
    const all = this.newsService.getAll();
    this.latest = all[0];
    this.strip = all.slice(1, 5);
  }

  openQuickLinks(): void {
    this.quickOpen.set(true);
  }

  closeQuickLinks(): void {
    this.quickOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeQuickLinks();
  }
}