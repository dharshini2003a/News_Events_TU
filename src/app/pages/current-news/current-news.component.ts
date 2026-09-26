import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsItem } from '../../core/models/news.data';
import { NewsService } from '../../core/services/news.service';

const PAGE_SIZE = 5;

@Component({
  selector: 'app-current-news',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './current-news.component.html',
})
export class CurrentNewsComponent {
  private newsList: NewsItem[];

  years: (number | string)[];
  places: string[];

  query = '';
  sortOrder: 'newest' | 'oldest' = 'newest';
  yearFilter: number | 'All Years' = 'All Years';
  placeFilter: string;
  page = 1;
  activeTag: string | null = null;

  constructor(private newsService: NewsService, private route: ActivatedRoute) {
    this.newsList = this.newsService.getAll();
    this.places = this.newsService.getCentres(); // first entry is "All Locations"
    this.placeFilter = this.places[0];

    const yearSet = new Set(this.newsList.map((n) => new Date(n.date).getFullYear()));
    this.years = ['All Years', ...Array.from(yearSet).sort((a, b) => b - a)];

    this.activeTag = this.route.snapshot.queryParamMap.get('tag');
  }

  formatDate = (d: string) => this.newsService.formatDate(d);

  get filtered(): NewsItem[] {
    let list = this.newsList.filter((n) => {
      const q = this.query.trim().toLowerCase();
      const matchesQuery =
        q === '' ||
        n.title.toLowerCase().includes(q) ||
        n.keywords.some((k) => k.toLowerCase().includes(q));
      const matchesTag =
        !this.activeTag ||
        n.centre.toLowerCase() === this.activeTag.toLowerCase() ||
        n.category.toLowerCase() === this.activeTag.toLowerCase() ||
        n.keywords.some((k) => k.toLowerCase() === this.activeTag!.toLowerCase());
      const matchesYear =
        this.yearFilter === 'All Years' || new Date(n.date).getFullYear() === this.yearFilter;
      const matchesPlace =
        this.placeFilter === 'All Locations' ||
        n.centre.toLowerCase() === this.placeFilter.toLowerCase();
      return matchesQuery && matchesTag && matchesYear && matchesPlace;
    });
    list = [...list].sort((a, b) =>
      this.sortOrder === 'newest'
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    return list;
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filtered.length / PAGE_SIZE));
  }

  get pageItems(): NewsItem[] {
    return this.filtered.slice((this.page - 1) * PAGE_SIZE, this.page * PAGE_SIZE);
  }

  get pageNumbers(): (number | string)[] {
    const total = this.totalPages;
    const current = this.page;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const start = Math.max(1, Math.min(current, total - 4));
    const end = Math.min(total - 1, start + 4);
    const pages: (number | string)[] = [];
    for (let p = start; p <= end; p++) pages.push(p);
    if (end < total - 1) pages.push('…');
    pages.push(total);
    return pages;
  }

  onQueryChange(): void {
    this.page = 1;
  }

  onYearChange(): void {
    this.page = 1;
  }

  onPlaceChange(): void {
    this.page = 1;
  }

  handleTagClick(tag: string): void {
    this.activeTag =
      this.activeTag && this.activeTag.toLowerCase() === tag.toLowerCase() ? null : tag;
    this.page = 1;
  }

  prevPage(): void {
    this.page = Math.max(1, this.page - 1);
  }

  nextPage(): void {
    this.page = Math.min(this.totalPages, this.page + 1);
  }

  goToPage(p: number | string): void {
    if (typeof p === 'number') this.page = p;
  }

  hashtag(text: string): string {
    return text.replace(/\s+/g, '');
  }
}
