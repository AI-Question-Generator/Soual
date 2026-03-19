import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
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
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly roleOptions = [
    { label: 'طالب', value: 'student' },
    { label: 'معلم', value: 'teacher' },
  ];

  isLoading = signal(false);
  errorMessage = signal('');

  form = this.fb.group(
    {
      username: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ]),
      email: this.fb.nonNullable.control('', [Validators.required, Validators.email]),
      role: this.fb.control<'student' | 'teacher'>('student', [Validators.required]),
      firstName: this.fb.nonNullable.control(''),
      lastName: this.fb.nonNullable.control(''),
      password: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: this.fb.nonNullable.control('', [Validators.required]),
    },
    { validators: passwordMatchValidator },
  );

  isFieldInvalid(fieldName: string) {
    const ctrl = this.form.get(fieldName) as FormControl;
    return ctrl.invalid && ctrl.touched && ctrl.dirty;
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
      role: this.form.controls.role.value,
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
    };

    console.log('Register payload:', payload);

    this.isLoading.set(true);
    this.errorMessage.set('');

    this.authService
      .register({
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
          // TODO: Show success message
        },
        error: (err) => {
          this.isLoading.set(false);
          this.errorMessage.set('حدث خطأ أثناء إنشاء الحساب، يرجى المحاولة مرة أخرى.');
          console.log('Failed to create account', err);
        },
      });
  }
}
