import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { Observable, tap } from 'rxjs';
import { QuestionGenerationService } from '@feature/generation/services';
import type { GenerationRequestResponse } from '@feature/generation/models';
import { RequestStatusBadgeComponent } from '@feature/generation/components';
import { ConfirmDialogService } from '@shared/components/confirm-dialog';
import { ToastService } from '@shared/services';
import { formatDate } from '@shared/utilities';

type RequestRow = GenerationRequestResponse & { totalQuestions: number };

@Component({
  selector: 'soual-requests-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'container block py-6' },
  imports: [TableModule, ButtonModule, SkeletonModule, RequestStatusBadgeComponent, RouterLink],
  template: `
    <p-table
      dataKey="id"
      sortField="requestedAt"
      [sortOrder]="-1"
      [value]="requests() ?? []"
      [loading]="requests() === null"
      [showLoader]="false"
      [paginator]="true"
      [rows]="10"
      [alwaysShowPaginator]="false"
    >
      <ng-template #caption>
        <div class="flex-between gap-3">
          <h2 class="text-lg font-bold text-slate-800">طلبات توليد الأسئلة</h2>
          <span class="text-xs text-slate-500">{{ requests()?.length ?? 0 }} طلب</span>
        </div>
      </ng-template>

      <ng-template #header>
        <tr>
          <th>المشروع</th>
          <th pSortableColumn="requestedAt">
            تاريخ الطلب
            <p-sortIcon field="requestedAt" />
          </th>
          <th>الدروس</th>
          <th pSortableColumn="totalQuestions">
            الأسئلة المطلوبة
            <p-sortIcon field="totalQuestions" />
          </th>
          <th>الحالة</th>
          <th></th>
        </tr>
      </ng-template>

      <ng-template #body let-request>
        <tr class="cursor-pointer" (click)="openRequest(request.id)">
          <td class="font-medium text-slate-800">{{ request.projectName }}</td>
          <td class="text-slate-600">{{ formatDate(request.requestedAt) }}</td>
          <td class="text-slate-600">{{ request.lessonIds?.length ?? 0 }}</td>
          <td class="text-slate-600">{{ request.totalQuestions }}</td>
          <td><soual-request-status-badge [status]="request.status" /></td>
          <td>
            <div class="flex items-center gap-1 justify-end">
              <p-button
                icon="pi pi-external-link"
                ariaLabel="عرض الطلب"
                [text]="true"
                [rounded]="true"
                [routerLink]="['/generation/requests', request.id]"
              />
              <p-button
                icon="pi pi-trash"
                severity="danger"
                ariaLabel="حذف الطلب"
                [text]="true"
                [rounded]="true"
                (onClick)="confirmDelete($event, request)"
              />
            </div>
          </td>
        </tr>
      </ng-template>

      <ng-template #loadingbody>
        @for (row of skeletonRows; track row) {
          <tr>
            <td><p-skeleton width="9rem" /></td>
            <td><p-skeleton width="11rem" /></td>
            <td><p-skeleton width="2rem" /></td>
            <td><p-skeleton width="2rem" /></td>
            <td><p-skeleton width="5.5rem" height="1.65rem" borderRadius="0.375rem" /></td>
            <td>
              <div class="flex items-center gap-1 justify-end">
                <p-skeleton shape="circle" size="2rem" />
                <p-skeleton shape="circle" size="2rem" />
              </div>
            </td>
          </tr>
        }
      </ng-template>

      <ng-template #emptymessage>
        <tr>
          <td colspan="6">
            <div class="flex-col-center gap-4 py-12 text-center">
              <span class="flex-center h-14 w-14 rounded-2xl bg-main-50 text-main-400">
                <i class="pi pi-inbox text-3xl"></i>
              </span>
              <p class="max-w-xs text-sm leading-relaxed text-slate-500">
                لا توجد طلبات بعد — اختر دروسًا من صفحة المواد لتوليد الأسئلة
              </p>
              <p-button
                label="اذهب إلى المواد"
                icon="pi pi-book"
                size="small"
                routerLink="/subjects/english"
                [outlined]="true"
              />
            </div>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `,
})
export class RequestsListComponent implements OnInit {
  private readonly generationService = inject(QuestionGenerationService);
  private readonly confirmDialog = inject(ConfirmDialogService);
  private readonly toast = inject(ToastService);
  private readonly router = inject(Router);

  protected readonly requests = signal<RequestRow[] | null>(null);
  protected readonly skeletonRows = [0, 1, 2, 3];
  protected readonly formatDate = (value: string) => formatDate(value, true);

  ngOnInit() {
    this.generationService.getRequests().subscribe({
      next: (requests) =>
        this.requests.set(
          requests.map((request) => ({ ...request, totalQuestions: this.totalQuestions(request) })),
        ),
      error: () => {
        this.requests.set([]);
        this.toast.error('تعذر تحميل الطلبات', 'حدث خطأ أثناء تحميل طلبات التوليد');
      },
    });
  }

  protected openRequest(id: string): void {
    this.router.navigate(['/generation/requests', id]);
  }

  private totalQuestions(request: GenerationRequestResponse): number {
    return (request.questionConfigs ?? []).reduce((sum, config) => sum + config.numQuestions, 0);
  }

  protected confirmDelete(event: MouseEvent, request: GenerationRequestResponse): void {
    event.stopPropagation();
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
