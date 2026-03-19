import { inject, Injectable } from '@angular/core';
import { MessageService, type ToastMessageOptions } from 'primeng/api';

export type AppToastSeverity = 'success' | 'warn' | 'error';

export interface AppToastOptions {
  severity: AppToastSeverity;
  summary: string;
  detail?: string;
  life?: number;
  sticky?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private messageService = inject(MessageService);

  private readonly TOAST_KEY = 'soual-toast';

  show(options: AppToastOptions): void {
    const message: ToastMessageOptions = {
      key: this.TOAST_KEY,
      severity: options.severity,
      summary: options.summary,
      detail: options.detail,
      life: options.life,
      sticky: options.sticky,
    };

    this.messageService.add(message);
  }

  success(summary: string, detail?: string, life?: number): void {
    this.show({ severity: 'success', summary, detail, life });
  }

  warning(summary: string, detail?: string, life?: number): void {
    this.show({ severity: 'warn', summary, detail, life });
  }

  error(summary: string, detail?: string, life?: number): void {
    this.show({ severity: 'error', summary, detail, life });
  }

  clear(): void {
    this.messageService.clear(this.TOAST_KEY);
  }
}
