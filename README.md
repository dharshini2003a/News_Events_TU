# Aravind Eye Care News — Angular (Phase 1: UI-only conversion)

This is a 1:1 Angular port of the ReactJS "News Update" frontend. **No backend/API/database
connectivity has been added** — that is intentionally deferred to Phase 2, per your instructions.

## How to run

```bash
npm install
npm start        # ng serve, http://localhost:4200
npm run build     # production build to dist/aravind-eye-care-news
```

Requires Node 18+ and the Angular CLI (installed automatically via devDependencies /
`npx ng` if you don't have it globally).

## React → Angular mapping

| React (before)                          | Angular (after)                                                      |
|------------------------------------------|-----------------------------------------------------------------------|
| `main.jsx` + `HashRouter`                | `main.ts` + `provideRouter(routes, withHashLocation())`               |
| `App.jsx` (Routes, admin-route header/footer toggle) | `app.component.ts` + `app.routes.ts` (lazy-loaded standalone components) |
| React components (function + JSX)        | Angular standalone components (`.ts` + `.html`)                       |
| `useState` / `useMemo`                   | Component fields, `signal()`, and getters (see `CurrentNewsComponent`) |
| `useEffect` (scroll-to-top, key listener) | `Router.events` subscription in `AppComponent`; `@HostListener` in `PhotoCarouselComponent` |
| React Router `<Link>` / `<NavLink>`      | `routerLink` / `routerLinkActive`                                     |
| `useParams`, `useSearchParams`           | `ActivatedRoute.snapshot.paramMap` / `queryParamMap`                  |
| `useNavigate`                            | `Router.navigate()`                                                   |
| Component props                          | `@Input()`                                                             |
| `newsData.js` (static array + helpers)   | `core/models/news.data.ts` (typed `NewsItem[]`) + `core/services/news.service.ts` |
| Inline `<form onSubmit>` (Contact, AdminLogin) | Angular `ReactiveFormsModule` (`FormBuilder`, `formGroup`)      |
| Controlled inputs (AddNews, CurrentNews filters) | `FormsModule` + `[(ngModel)]`                                   |
| CSS (`index.css`)                        | Copied verbatim to `src/styles.css` (global styles, same class names) |

## Project structure

```
src/
  app/
    core/
      models/news.data.ts       # typed news data (was newsData.js)
      services/news.service.ts  # data-access layer — swap internals for HttpClient in Phase 2
    shared/components/
      header/                   # was Header.jsx
      footer/                   # was Footer.jsx
      admin-sidebar/            # was AdminSidebar.jsx
      photo-carousel/           # was the PhotoCarousel + Lightbox functions inside NewsDetail.jsx
    pages/
      home/                     # was Home.jsx
      current-news/             # was CurrentNews.jsx
      news-detail/              # was NewsDetail.jsx
      archives/                 # was Archives.jsx
      thingal-udhayam/          # was ThingalUdhayam.jsx
      contact/                  # was Contact.jsx
      admin-login/              # was AdminLogin.jsx
      admin-dashboard/          # was AdminDashboard.jsx
      add-news/                 # was AddNews.jsx
    app.component.ts            # was App.jsx
    app.config.ts                # providers (router)
    app.routes.ts                 # was the <Routes> block in App.jsx
  styles.css                    # was index.css (unchanged)
  index.html
  main.ts
```

## Pages / routes (unchanged, using hash routing exactly like the React `HashRouter`)

- `/` → Home
- `/current-news` → Current News (search, sort, year/place filters, tag filter, pagination)
- `/current-news/:id` → News Detail (gallery + lightbox)
- `/archives` → Archives (year grid)
- `/thingal-udhayam` → Thingal Udhayam (static placeholder)
- `/contact` → Contact (form, UI-only submit)
- `/admin` → Admin Login (demo-only, always logs in)
- `/admin/dashboard` → Admin Dashboard (news table, client-side delete only)
- `/admin/add-news` → Add News (tags, drag-and-drop image previews, no upload)

## Forms & validation

- **Contact** and **Admin Login**: converted to Angular Reactive Forms (`FormGroup`/`FormBuilder`).
- **Add News** and the **Current News filters**: converted to template-driven forms (`FormsModule`
  + `[(ngModel)]`) since the React version used simple controlled inputs with no validation rules
  beyond "title required" — that check is preserved in `AddNewsComponent.handleSubmit()`.
- None of these forms call an API yet. Submit handlers show the same demo `alert(...)` the React
  version showed, and `AddNews`/`AdminLogin` navigate exactly like before.

## What's intentionally NOT done (Phase 2)

- No `HttpClient` calls anywhere — `NewsService` still returns the static `news.data.ts` array.
- No environment files / API base URL configuration yet.
- No auth guards/interceptors — Admin Login always "succeeds," same as the React demo.
- No connection to your existing backend or database.

`NewsService` is deliberately the single seam to change in Phase 2: swap its method bodies to call
`HttpClient` against your real API, and every component that injects it keeps working unchanged.

## Known gaps / needs manual verification

- **Images**: the React project's real photo assets (the `public/images/...` and the many
  `.jpg`/`.JPG` gallery files referenced in `newsData.js`) were not part of the uploaded files, so
  they aren't included here either. Copy your existing `public/images` (and any other public
  assets) into `src/assets/images` — paths in `news.data.ts` and `Home`/`AdminLogin`
  (`assets/images/hero-1.svg`) already point at `assets/images/...`, matching Angular's default
  static-asset convention (Angular serves `src/assets/*` at `/assets/*`, whereas the CRA/Vite
  version served `public/*` at `/*` — this is the one path convention change and only affects
  where you drop the image files, not any component code).
- `favicon.svg` and `assets/images/hero-1.svg` are placeholder SVGs — replace with your real files.
- Angular's build-time strict template checking is on (`strictTemplates: true`); if you add new
  fields to `NewsItem` later, TypeScript will flag any template mismatch immediately, which is a
  safety net React's JSX didn't have.

## Dependencies

Everything needed ships in `package.json` (`@angular/core`, `router`, `forms`, `animations`, `rxjs`,
`zone.js`) — no extra third-party packages were required to match the existing UI/behaviour.
