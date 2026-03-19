import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'soual-toast',
  imports: [ToastModule],
  template: `
    <p-toast
      key="soual-toast"
      position="top-right"
      [preventOpenDuplicates]="true"
      [breakpoints]="{ '480px': { width: '90%', right: '1rem' } }"
    >
      <ng-template let-message let-closeFn="closeFn" pTemplate="headless">
        <div [class]="containerClass(message.severity)">
          <div class="flex items-start gap-3">
            <span [class]="iconContainerClass(message.severity)">
              <i [class]="iconClass(message.severity)"></i>
            </span>

            <div class="flex-1">
              <p class="text-sm font-semibold text-slate-900">{{ message.summary }}</p>

              @if (message.detail) {
                <p class="mt-1 text-sm text-slate-600">{{ message.detail }}</p>
              }
            </div>

            <button
              type="button"
              class="flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
              (click)="closeFn($event)"
            >
              <i class="pi pi-times text-xs"></i>
            </button>
          </div>
        </div>
      </ng-template>
    </p-toast>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class ToastComponent {
  containerClass(severity: string) {
    if (severity === 'success') {
      return 'w-full px-3 py-4 shadow-lg';
    }

    if (severity === 'warn') {
      return 'w-full px-3 py-4 shadow-lg';
    }

    return 'w-full px-3 py-4 shadow-lg';
  }

  iconClass(severity: string) {
    if (severity === 'success') {
      return 'pi pi-check-circle text-sm text-secondary-700';
    }

    if (severity === 'warn') {
      return 'pi pi-exclamation-circle text-sm text-amber-700';
    }

    return 'pi pi-times-circle text-sm text-rose-700';
  }

  iconContainerClass(severity: string) {
    const baseClass = 'mt-0.5 flex-center h-7 w-7 shrink-0 rounded-full';
    if (severity === 'success') {
      return `${baseClass} bg-secondary-50`;
    }

    if (severity === 'warn') {
      return `${baseClass} bg-amber-100`;
    }

    return `${baseClass} bg-rose-100`;
  }
}
