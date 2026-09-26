import { Component } from '@angular/core';

@Component({
  selector: 'app-thingal-udhayam',
  standalone: true,
  template: `
    <div class="container page-content">
      <h1 class="section-title">Thingal Udhayam</h1>
      <div class="contact-card" style="max-width: 640px">
        <p style="color: var(--ink-soft)">
          This is a placeholder layout for the monthly internal newsletter "Thingal Udhayam". Issues
          will be listed here as downloadable PDFs or flip-book style pages once content is finalised.
        </p>
        <ul style="color: var(--ink); font-size: 14px; line-height: 2">
          <li>September 2026 — Issue 114 </li>
          <li>August 2026 — Issue 113 </li>
          <li>July 2026 — Issue 112 </li>
        </ul>
      </div>
    </div>
  `,
})
export class ThingalUdhayamComponent {}
