import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
<<<<<<< HEAD
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
=======
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)
import { Router, RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabel } from 'primeng/floatlabel';
<<<<<<< HEAD
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
=======
import { SelectButtonModule } from 'primeng/selectbutton';
import { AuthService } from '@core/services/auth/auth.service';
import { passwordMatchValidator } from '@shared/validators/password-match.validator';
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)

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
<<<<<<< HEAD
    SelectButtonModule,
=======
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
=======
    SelectButtonModule,
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)
  ],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)
  readonly roleOptions = [
    { label: 'طالب', value: 'student' },
    { label: 'معلم', value: 'teacher' },
  ];

<<<<<<< HEAD
=======
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
=======
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)
  isLoading = signal(false);
  errorMessage = signal('');

  form = new FormGroup(
    {
<<<<<<< HEAD
<<<<<<< HEAD
      username: new FormControl('', {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(50)],
=======
      name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
=======
      username: new FormControl('', {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(50)],
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)
        nonNullable: true,
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)
      role: new FormControl<'student' | 'teacher'>('student', {
        validators: [Validators.required],
      }),
      firstName: new FormControl('', {
        nonNullable: true,
      }),
      lastName: new FormControl('', {
        nonNullable: true,
      }),
<<<<<<< HEAD
=======
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
=======
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)
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
<<<<<<< HEAD
  get usernameInvalid() {
    const c = this.form.controls.username;
=======
  get nameInvalid() {
    const c = this.form.controls.name;
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
=======
  get usernameInvalid() {
    const c = this.form.controls.username;
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)
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
<<<<<<< HEAD
=======
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)
  get roleInvalid() {
    const c = this.form.controls.role;
    return c.touched && c.invalid;
  }

<<<<<<< HEAD
=======
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
=======
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)
  get confirmPasswordInvalid() {
    return this.form.controls.confirmPassword.touched && this.form.hasError('passwordMismatch');
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)
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

<<<<<<< HEAD
=======
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
=======
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.authService
      .signup({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)
        username: payload.username,
        email: payload.email,
        password: payload.password,
        role: payload.role,
        firstName: payload.firstName,
        lastName: payload.lastName,
<<<<<<< HEAD
=======
        name: this.form.controls.name.value,
        email: this.form.controls.email.value,
        password: this.form.controls.password.value,
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
=======
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)
      })
      .subscribe({
        next: () => {
          this.isLoading.set(false);
<<<<<<< HEAD
<<<<<<< HEAD
          this.router.navigate(['/login']);
=======
          this.router.navigate(['/auth/login']);
>>>>>>> b8481d5 (feat(auth): add register component with form validation and error handling)
=======
          this.router.navigate(['/login']);
>>>>>>> f2d630f (feat(auth): update registration form with username, role, and optional name fields)
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
