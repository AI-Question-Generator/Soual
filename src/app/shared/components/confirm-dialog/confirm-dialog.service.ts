import {
  ApplicationRef,
  createComponent,
  EmbeddedViewRef,
  EnvironmentInjector,
  inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent, ConfirmSeverity } from './confirm-dialog.component';

export interface ConfirmDialogOptions {
  severity?: ConfirmSeverity;
  title: string;
  message: string;
  /** PrimeIcons class, e.g. 'pi pi-trash'. Overrides the per-severity default. */
  icon?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  /** Async action to run on confirm. Accepts a Promise or Observable. Dialog shows loading until it completes, closes on success, clears loading on error. */
  onConfirm: () => Promise<void> | Observable<unknown>;
}

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  private readonly appRef = inject(ApplicationRef);
  private readonly envInjector = inject(EnvironmentInjector);

  confirm(options: ConfirmDialogOptions): void {
    const ref = createComponent(ConfirmDialogComponent, {
      environmentInjector: this.envInjector,
    });

    ref.setInput('severity', options.severity ?? 'confirm');
    ref.setInput('title', options.title);
    ref.setInput('message', options.message);
    ref.setInput('confirmHandler', options.onConfirm);
    if (options.icon) ref.setInput('icon', options.icon);
    if (options.confirmLabel) ref.setInput('confirmLabel', options.confirmLabel);
    if (options.cancelLabel) ref.setInput('cancelLabel', options.cancelLabel);

    const cleanup = () => ref.destroy();

    ref.instance.confirm.subscribe(() => cleanup());
    ref.instance.cancelled.subscribe(() => cleanup());

    this.appRef.attachView(ref.hostView);
    const domNode = (ref.hostView as EmbeddedViewRef<unknown>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domNode);

    ref.instance.open();
    ref.changeDetectorRef.detectChanges();
  }
}
