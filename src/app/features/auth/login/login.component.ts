import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  private readonly router = inject(Router);

  readonly isLoading = signal(false);
  readonly errorMessage = signal('');

  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      nonNullable: true,
    }),
  });

  get emailInvalid() {
    const ctrl = this.form.controls.email;
    return ctrl.invalid && ctrl.touched;
  }

  get passwordInvalid() {
    const ctrl = this.form.controls.password;
    return ctrl.invalid && ctrl.touched;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    this.authService
      .login({
        email: this.form.controls.email.value,
        password: this.form.controls.password.value,
      })
      .subscribe({
        next: () => {
          this.isLoading.set(false);
          console.log('Login successful');
        },
        error: () => {
          this.isLoading.set(false);
          this.errorMessage.set('حدث خطأ، يرجى المحاولة مرة أخرى.');
          console.log('Login failed');
        },
      });
  }
}
