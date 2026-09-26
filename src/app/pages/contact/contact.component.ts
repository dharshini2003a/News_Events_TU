import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  // Reactive Form mirrors the React <form> fields (Name, Email, Message).
  // Submission is a UI-only placeholder until Phase 2 wires it to the API.
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      email: ['', [Validators.email]],
      message: [''],
    });
  }

  onSubmit(): void {
    // Intentionally a no-op for now (matches React's e.preventDefault()-only handler).
  }
}
