import { Component } from '@angular/core';
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

  constructor(private newsService: NewsService) {
    const all = this.newsService.getAll();
    this.latest = all[0];
    this.strip = all.slice(1, 5);
  }
}
