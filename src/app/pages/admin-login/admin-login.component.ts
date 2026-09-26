import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
})
export class AdminLoginComponent {
  showPassword = signal(false);

  // Demo credentials pre-filled, matching the React version's defaultValue.
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: ['admin'],
      password: ['demo1234'],
    });
  }

  togglePassword(): void {
    this.showPassword.update((s) => !s);
  }

  handleLogin(): void {
    this.router.navigate(['/admin/dashboard']);
  }
}
