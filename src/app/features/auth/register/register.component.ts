import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
=======
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
import { Router, RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabel } from 'primeng/floatlabel';
<<<<<<< HEAD
import { SelectButtonModule } from 'primeng/selectbutton';
import { AuthService } from '@core/services/auth/auth.service';
import { passwordMatchValidator } from '@shared/validators/password-match.validator';
=======
import { AuthService } from '@core/services/auth/auth.service';

function passwordMatchValidator(control: AbstractControl) {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)

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
<<<<<<< HEAD
    SelectButtonModule,
=======
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
  ],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

<<<<<<< HEAD
  readonly roleOptions = [
    { label: 'طالب', value: 'student' },
    { label: 'معلم', value: 'teacher' },
  ];

=======
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
  isLoading = signal(false);
  errorMessage = signal('');

  form = new FormGroup(
    {
<<<<<<< HEAD
      username: new FormControl('', {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(50)],
=======
      name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
        nonNullable: true,
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
<<<<<<< HEAD
      role: new FormControl<'student' | 'teacher'>('student', {
        validators: [Validators.required],
      }),
      firstName: new FormControl('', {
        nonNullable: true,
      }),
      lastName: new FormControl('', {
        nonNullable: true,
      }),
=======
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
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

<<<<<<< HEAD
  get usernameInvalid() {
    const c = this.form.controls.username;
=======
  get nameInvalid() {
    const c = this.form.controls.name;
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
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

<<<<<<< HEAD
  get roleInvalid() {
    const c = this.form.controls.role;
    return c.touched && c.invalid;
  }

=======
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
  get confirmPasswordInvalid() {
    return this.form.controls.confirmPassword.touched && this.form.hasError('passwordMismatch');
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

<<<<<<< HEAD
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

=======
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.authService
      .signup({
<<<<<<< HEAD
        username: payload.username,
        email: payload.email,
        password: payload.password,
        role: payload.role,
        firstName: payload.firstName,
        lastName: payload.lastName,
=======
        name: this.form.controls.name.value,
        email: this.form.controls.email.value,
        password: this.form.controls.password.value,
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
      })
      .subscribe({
        next: () => {
          this.isLoading.set(false);
<<<<<<< HEAD
          this.router.navigate(['/login']);
=======
          this.router.navigate(['/auth/login']);
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
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
