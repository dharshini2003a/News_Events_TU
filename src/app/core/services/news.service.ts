import { Injectable } from '@angular/core';
import { NewsItem, newsList, categories, centres, formatDate } from '../models/news.data';

/**
 * NewsService — Phase 1 (frontend-only) mode.
 * Holds the demo data in memory for the lifetime of the browser tab
 * (this service is a singleton — `providedIn: 'root'`). addNews/updateNews
 * mutate this in-memory list so the Dashboard reflects changes made in
 * Add News immediately, without a backend. A page refresh resets to the
 * original static data — that's expected until Phase 2 wires up the API.
 */
@Injectable({ providedIn: 'root' })
export class NewsService {
  private readonly allNews: NewsItem[] = [...newsList];

  getAll(): NewsItem[] {
    return this.allNews;
  }

  getById(id: number | string): NewsItem | undefined {
    return this.allNews.find((n) => String(n.id) === String(id));
  }

  addNews(item: NewsItem): void {
    this.allNews.unshift(item);
  }

  updateNews(id: number, patch: Partial<NewsItem>): void {
    const idx = this.allNews.findIndex((n) => n.id === id);
    if (idx !== -1) {
      this.allNews[idx] = { ...this.allNews[idx], ...patch };
    }
  }

  deleteNews(id: number): void {
    const idx = this.allNews.findIndex((n) => n.id === id);
    if (idx !== -1) this.allNews.splice(idx, 1);
  }

  nextId(): number {
    return this.allNews.reduce((max, n) => Math.max(max, n.id), 0) + 1;
  }

  getCategories(): string[] {
    return categories;
  }

  getCentres(): string[] {
    return centres;
  }

  formatDate(dateStr: string): string {
    return formatDate(dateStr);
  }
}