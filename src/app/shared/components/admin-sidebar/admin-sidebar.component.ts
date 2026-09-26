import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-sidebar.component.html',
})
export class AdminSidebarComponent {
  // React prop `active` -> Angular @Input. One of:
  // 'dashboard' | 'add-news' | 'all-news' | 'drafts'
  @Input() active = '';
}