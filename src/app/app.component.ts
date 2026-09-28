import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    @if (!isAdminRoute()) {
      <app-header />
    }
    <router-outlet />
    @if (!isAdminRoute()) {
      <app-footer />
    }
  `,
})
export class AppComponent {
  // Header/Footer show on every public page, INCLUDING the admin login
  // page (/admin) — only the inner admin pages (/admin/dashboard,
  // /admin/add-news, ...) use their own sidebar shell instead.
  isAdminRoute = signal(false);

  constructor(private router: Router) {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const url = (e as NavigationEnd).urlAfterRedirects;
      this.isAdminRoute.set(url.startsWith('/admin/'));
      // Equivalent to the React app's ScrollToTop component.
      window.scrollTo(0, 0);
    });
  }
}