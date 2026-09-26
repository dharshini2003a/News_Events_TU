import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NewsItem } from '../../core/models/news.data';
import { NewsService } from '../../core/services/news.service';
import { AdminSidebarComponent } from '../../shared/components/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [AdminSidebarComponent, RouterLink],
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent {
  newsList = signal<NewsItem[]>([]);
  showAll = signal(false);

  constructor(private newsService: NewsService, private router: Router) {
    this.refresh();
  }

  private refresh(): void {
    this.newsList.set([...this.newsService.getAll()]);
  }

  formatDate = (d: string) => this.newsService.formatDate(d);

  get totalImages(): number {
    return this.newsList().reduce((sum, n) => sum + n.gallery.length, 0);
  }

  get visible(): NewsItem[] {
    return this.showAll() ? this.newsList() : this.newsList().slice(0, 5);
  }

  handleDelete(id: number): void {
    if (window.confirm('Delete this news item?')) {
      this.newsService.deleteNews(id);
      this.refresh();
    }
  }

  handleEdit(id: number): void {
    this.router.navigate(['/admin/add-news'], { queryParams: { edit: id } });
  }

  viewAll(): void {
    this.showAll.set(true);
  }
}