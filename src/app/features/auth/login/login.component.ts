import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabel } from 'primeng/floatlabel';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'soual-login',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgOptimizedImage,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    FloatLabel,
  ],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'min-h-screen flex', dir: 'ltr' },
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly isLoading = signal(false);
  readonly errorMessage = signal('');

  form = this.fb.group({
    username: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(1)]),
    password: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(8)]),
  });

  isFieldInvalid(fieldName: string) {
    const ctrl = this.form.get(fieldName) as FormControl;
    return ctrl.invalid && ctrl.dirty && ctrl.touched;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = {
      username: this.form.controls.username.value,
      password: this.form.controls.password.value,
    };

    this.isLoading.set(true);

    this.authService.login(payload).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        this.authService.setAuthenticatedUser(response);
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.isLoading.set(false);
        console.error('Login error:', error);
        this.errorMessage.set('Invalid username or password.');
      },
    });
  }
}
