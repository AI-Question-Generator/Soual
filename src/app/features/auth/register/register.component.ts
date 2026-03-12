import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabel } from 'primeng/floatlabel';
import { AuthService } from '@core/services/auth/auth.service';

function passwordMatchValidator(control: AbstractControl) {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}

@Component({
  selector: 'soual-register',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgOptimizedImage,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    FloatLabel,
  ],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoading = signal(false);
  errorMessage = signal('');

  form = new FormGroup(
    {
      name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
        nonNullable: true,
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
        nonNullable: true,
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    },
    { validators: passwordMatchValidator },
  );

  get nameInvalid() {
    const c = this.form.controls.name;
    return c.touched && c.dirty && c.invalid;
  }

  get emailInvalid() {
    const c = this.form.controls.email;
    return c.touched && c.dirty && c.invalid;
  }

  get passwordInvalid() {
    const c = this.form.controls.password;
    return c.touched && c.dirty && c.invalid;
  }

  get confirmPasswordInvalid() {
    return this.form.controls.confirmPassword.touched && this.form.hasError('passwordMismatch');
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    this.authService
      .signup({
        name: this.form.controls.name.value,
        email: this.form.controls.email.value,
        password: this.form.controls.password.value,
      })
      .subscribe({
        next: () => {
          this.isLoading.set(false);
          this.router.navigate(['/auth/login']);
          console.log('Account created successfully');
        },
        error: () => {
          this.isLoading.set(false);
          this.errorMessage.set('حدث خطأ أثناء إنشاء الحساب، يرجى المحاولة مرة أخرى.');
          console.log('Failed to create account');
        },
      });
  }
}
