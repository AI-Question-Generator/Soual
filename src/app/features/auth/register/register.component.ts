import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabel } from 'primeng/floatlabel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AuthService } from '@core/services/auth/auth.service';
import { passwordMatchValidator } from '@shared/validators/password-match.validator';

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
    SelectButtonModule,
  ],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  readonly roleOptions = [
    { label: 'طالب', value: 'student' },
    { label: 'معلم', value: 'teacher' },
  ];

  isLoading = signal(false);
  errorMessage = signal('');

  form = new FormGroup(
    {
      username: new FormControl('', {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(50)],
        nonNullable: true,
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
      role: new FormControl<'student' | 'teacher'>('student', {
        validators: [Validators.required],
      }),
      firstName: new FormControl('', {
        nonNullable: true,
      }),
      lastName: new FormControl('', {
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

  get usernameInvalid() {
    const c = this.form.controls.username;
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

  get roleInvalid() {
    const c = this.form.controls.role;
    return c.touched && c.invalid;
  }

  get confirmPasswordInvalid() {
    return this.form.controls.confirmPassword.touched && this.form.hasError('passwordMismatch');
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = {
      username: this.form.controls.username.value,
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
      confirmPassword: this.form.controls.confirmPassword.value,
      role: this.form.controls.role.value,
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
    };

    console.log('Register payload:', payload);

    this.isLoading.set(true);
    this.errorMessage.set('');

    this.authService
      .signup({
        username: payload.username,
        email: payload.email,
        password: payload.password,
        role: payload.role,
        firstName: payload.firstName,
        lastName: payload.lastName,
      })
      .subscribe({
        next: () => {
          this.isLoading.set(false);
          this.router.navigate(['/login']);
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
