import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { AvatarModule } from 'primeng/avatar';
import { AuthService } from '@core/services/auth/auth.service';
import { ToastService } from '@shared/services';

@Component({
  selector: 'soual-profile',
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule, MessageModule, AvatarModule],
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block min-h-screen' },
})
export class ProfileComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly toast = inject(ToastService);

  readonly user = this.authService.currentUser;
  readonly isSaving = signal(false);

  form = this.fb.nonNullable.group({
    first_name: ['', [Validators.maxLength(50)]],
    last_name: ['', [Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnInit() {
    const user = this.user();
    if (user) {
      this.form.setValue({
        first_name: user.first_name ?? '',
        last_name: user.last_name ?? '',
        email: user.email ?? '',
      });
    }
  }

  isFieldInvalid(fieldName: string) {
    const ctrl = this.form.get(fieldName) as FormControl;
    return ctrl.invalid && (ctrl.dirty || ctrl.touched);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.form.pristine) {
      this.toast.warning('لم تقم بأي تعديل');
      return;
    }

    this.isSaving.set(true);
    this.authService.editProfile(this.form.getRawValue()).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.form.markAsPristine();
        this.toast.success('تم تحديث الملف الشخصي بنجاح');
      },
      error: (error) => {
        this.isSaving.set(false);
        console.error('Profile update error:', error);
        this.toast.error('تعذّر تحديث الملف الشخصي، حاول مرة أخرى');
      },
    });
  }

  /** Revert any edits back to the currently loaded user. */
  onCancel() {
    const user = this.user();
    this.form.reset({
      first_name: user?.first_name ?? '',
      last_name: user?.last_name ?? '',
      email: user?.email ?? '',
    });
  }

  /** Pick avatar initials from the user's name or username. */
  get initials() {
    const user = this.user();
    if (!user) return '';
    const name = [user.first_name, user.last_name].filter(Boolean).join(' ') || user.username;
    const [first, last] = name.trim().split(/\s+/);
    return (last ? first[0] + last[0] : (first[0] ?? '')).toUpperCase();
  }
}
