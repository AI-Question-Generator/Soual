import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Observable, tap } from 'rxjs';
import { QuestionGenerationService } from '@feature/generation/services';
import type { GenerationRequestResponse } from '@feature/generation/models';
import { RequestStatusBadgeComponent } from '@feature/generation/components';
import { ConfirmDialogService } from '@shared/components/confirm-dialog';
import { ToastService } from '@shared/services';

@Component({
  selector: 'soual-requests-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'container block py-6' },
  imports: [TableModule, ButtonModule, RequestStatusBadgeComponent, RouterLink],
  template: `
    <section class="rounded-2xl bg-white border border-slate-200 shadow-sm p-5">
      <header class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-bold text-slate-800">طلبات توليد الأسئلة</h2>
        <span class="text-xs text-slate-500">{{ requests()?.length ?? 0 }} طلب</span>
      </header>

      <p-table dataKey="id" [value]="requests() ?? []" [loading]="requests() === null">
        <ng-template #header>
          <tr>
            <th>المشروع</th>
            <th>تاريخ الطلب</th>
            <th>الدروس</th>
            <th>الأسئلة المطلوبة</th>
            <th>الحالة</th>
            <th></th>
          </tr>
        </ng-template>

        <ng-template #body let-request>
          <tr>
            <td class="font-medium text-slate-800">{{ request.projectName }}</td>
            <td class="text-slate-600">{{ formatDate(request.requestedAt) }}</td>
            <td class="text-slate-600">{{ request.lessonIds?.length ?? 0 }}</td>
            <td class="text-slate-600">{{ totalQuestions(request) }}</td>
            <td><soual-request-status-badge [status]="request.status" /></td>
            <td>
              <div class="flex items-center gap-1 justify-end">
                <p-button
                  icon="pi pi-external-link"
                  [text]="true"
                  [rounded]="true"
                  [routerLink]="['/generation/requests', request.id]"
                />
                <p-button
                  icon="pi pi-trash"
                  severity="danger"
                  [text]="true"
                  [rounded]="true"
                  (onClick)="confirmDelete(request)"
                />
              </div>
            </td>
          </tr>
        </ng-template>

        <ng-template #emptymessage>
          <tr>
            <td colspan="6">
              <p class="text-sm text-slate-500 text-center py-8">
                لا توجد طلبات بعد — اختر دروسًا من صفحة المواد لتوليد الأسئلة
              </p>
            </td>
          </tr>
        </ng-template>
      </p-table>
    </section>
  `,
})
export class RequestsListComponent implements OnInit {
  private readonly generationService = inject(QuestionGenerationService);
  private readonly confirmDialog = inject(ConfirmDialogService);
  private readonly toast = inject(ToastService);

  protected readonly requests = signal<GenerationRequestResponse[] | null>(null);

  ngOnInit() {
    this.generationService.getRequests().subscribe({
      next: (requests) => this.requests.set(requests),
      error: () => {
        this.requests.set([]);
        this.toast.error('تعذر تحميل الطلبات', 'حدث خطأ أثناء تحميل طلبات التوليد');
      },
    });
  }

  protected totalQuestions(request: GenerationRequestResponse): number {
    return (request.questionConfigs ?? []).reduce((sum, config) => sum + config.numQuestions, 0);
  }

  protected formatDate(value: string): string {
    if (!value) return '—';
    return new Intl.DateTimeFormat('ar-EG', { dateStyle: 'medium', timeStyle: 'short' }).format(
      new Date(value),
    );
  }

  protected confirmDelete(request: GenerationRequestResponse): void {
    this.confirmDialog.confirm({
      severity: 'danger',
      title: 'حذف الطلب؟',
      message: `هل أنت متأكد من حذف طلب «${request.projectName}»؟ لا يمكن التراجع عن هذا الإجراء.`,
      confirmLabel: 'حذف',
      icon: 'pi pi-trash',
      onConfirm: () => this.deleteRequest(request.id),
    });
  }

  private deleteRequest(id: string): Observable<unknown> {
    return this.generationService.deleteRequest(id).pipe(
      tap({
        next: () => {
          this.requests.update((requests) =>
            (requests ?? []).filter((request) => request.id !== id),
          );
          this.toast.success('تم حذف الطلب');
        },
        error: () => this.toast.error('تعذر حذف الطلب', 'حدث خطأ أثناء حذف الطلب'),
      }),
    );
  }
}
