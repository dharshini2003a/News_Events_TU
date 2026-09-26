import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'current-news',
    loadComponent: () =>
      import('./pages/current-news/current-news.component').then((m) => m.CurrentNewsComponent),
  },
  {
    path: 'current-news/:id',
    loadComponent: () =>
      import('./pages/news-detail/news-detail.component').then((m) => m.NewsDetailComponent),
  },
  {
    path: 'archives',
    loadComponent: () =>
      import('./pages/archives/archives.component').then((m) => m.ArchivesComponent),
  },
  {
    path: 'thingal-udhayam',
    loadComponent: () =>
      import('./pages/thingal-udhayam/thingal-udhayam.component').then(
        (m) => m.ThingalUdhayamComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin-login/admin-login.component').then((m) => m.AdminLoginComponent),
  },
  {
    path: 'admin/dashboard',
    loadComponent: () =>
      import('./pages/admin-dashboard/admin-dashboard.component').then(
        (m) => m.AdminDashboardComponent
      ),
  },
  {
    path: 'admin/add-news',
    loadComponent: () =>
      import('./pages/add-news/add-news.component').then((m) => m.AddNewsComponent),
  },
  { path: '**', redirectTo: '' },
];