import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TagModule } from 'primeng/tag';
import type { RequestStatus } from '@feature/generation/models';

interface StatusTag {
  label: string;
  severity: 'secondary' | 'info' | 'success' | 'warn' | 'danger';
}

const STATUS_TAGS: Record<RequestStatus, StatusTag> = {
  PENDING: { label: 'قيد الانتظار', severity: 'secondary' },
  PROCESSING: { label: 'جاري التوليد', severity: 'info' },
  COMPLETED: { label: 'مكتمل', severity: 'success' },
  COMPLETED_WITH_ERRORS: { label: 'مكتمل مع أخطاء', severity: 'warn' },
  FAILED: { label: 'فشل', severity: 'danger' },
};

@Component({
  selector: 'soual-request-status-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-block' },
  imports: [TagModule],
  template: `<p-tag [value]="tag().label" [severity]="tag().severity" />`,
})
export class RequestStatusBadgeComponent {
  status = input.required<RequestStatus>();

  protected readonly tag = computed(() => STATUS_TAGS[this.status()]);
}
