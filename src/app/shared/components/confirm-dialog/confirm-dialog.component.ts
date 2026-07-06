import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { firstValueFrom, isObservable, Observable } from 'rxjs';

export type ConfirmSeverity = 'confirm' | 'warning' | 'danger';

interface SeverityConfig {
  iconBg: string;
  iconClass: string;
  isDanger: boolean;
}

@Component({
  selector: 'soual-confirm-dialog',
  imports: [DialogModule, ButtonModule],
  templateUrl: './confirm-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  readonly severity = input<ConfirmSeverity>('confirm');
  readonly title = input.required<string>();
  readonly message = input.required<string>();
  /** PrimeIcons class, e.g. 'pi pi-trash'. Overrides the per-severity default. */
  readonly icon = input<string>();
  readonly confirmLabel = input<string>('تأكيد');
  readonly cancelLabel = input<string>('إلغاء');
  /**
   * When provided (service-driven usage), clicking confirm sets loading state,
   * awaits this handler, then closes on success or clears loading on error.
   * When absent (template viewChild usage), confirm closes and emits immediately.
   */
  readonly confirmHandler = input<(() => Promise<void> | Observable<unknown>) | null>(null);
  /** Disables the confirm button — useful when custom confirmContent requires user input. */
  readonly confirmDisabled = input<boolean>(false);
  /** Hides the cancel button — useful when only the confirm action should be available. */
  readonly showCancelButton = input<boolean>(true);
  /** Hides the entire footer (both buttons) — useful when content replaces the action area. */
  readonly showFooter = input<boolean>(true);
  /** Hides the icon + title + message block entirely — use confirmContent to render a fully custom header. */
  readonly showHeader = input<boolean>(true);

  readonly confirm = output<void>();
  readonly cancelled = output<void>();

  readonly visible = signal(false);
  readonly loading = signal(false);

  readonly severityConfig = computed<SeverityConfig>(() => {
    switch (this.severity()) {
      case 'danger':
        return {
          iconBg: 'bg-red-50',
          iconClass: `${this.icon() ?? 'pi pi-exclamation-circle'} text-red-500`,
          isDanger: true,
        };
      case 'warning':
        return {
          iconBg: 'bg-orange-50',
          iconClass: `${this.icon() ?? 'pi pi-exclamation-triangle'} text-orange-500`,
          isDanger: false,
        };
      default:
        return {
          iconBg: 'bg-main-50',
          iconClass: `${this.icon() ?? 'pi pi-question-circle'} text-main-500`,
          isDanger: false,
        };
    }
  });

  readonly iconWrapperClass = computed(
    () => `w-12 h-12 flex-center rounded-full ${this.severityConfig().iconBg}`,
  );
  readonly iconClass = computed(() => `text-xl ${this.severityConfig().iconClass}`);

  open() {
    this.visible.set(true);
  }

  close() {
    this.visible.set(false);
  }

  onCancel() {
    if (this.loading()) return;
    this.close();
    this.cancelled.emit();
  }

  async onConfirm() {
    const handler = this.confirmHandler();

    if (!handler) {
      this.close();
      this.confirm.emit();
      return;
    }

    this.loading.set(true);
    try {
      const result = handler();
      await (isObservable(result) ? firstValueFrom(result) : result);
      this.close();
      this.confirm.emit();
    } catch {
      this.loading.set(false);
    }
  }
}
