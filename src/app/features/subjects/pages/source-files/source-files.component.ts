import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { FileUpload, FileUploadModule, type FileUploadHandlerEvent } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressBarModule } from 'primeng/progressbar';
import { EMPTY, catchError, concatMap, from, tap } from 'rxjs';
import { SourceFileService } from '@feature/subjects/services';
import type { SourceFileResponse } from '@feature/subjects/models';
import { ToastService } from '@shared/services';
import { ConfirmDialogService } from '@shared/components/confirm-dialog';
import { FileSizePipe } from '@shared/pipes';
import { formatDate } from '@shared/utilities';

interface ActiveUpload {
  name: string;
  index: number;
  total: number;
  progress: number;
}

@Component({
  selector: 'soual-source-files',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'container block py-6' },
  imports: [FileUploadModule, ButtonModule, SkeletonModule, ProgressBarModule, FileSizePipe],
  templateUrl: './source-files.component.html',
})
export class SourceFilesComponent implements OnInit {
  private readonly sourceFileService = inject(SourceFileService);
  private readonly toast = inject(ToastService);
  private readonly confirmDialog = inject(ConfirmDialogService);

  private readonly uploader = viewChild.required<FileUpload>('uploader');

  protected readonly files = signal<SourceFileResponse[] | null>(null);
  protected readonly activeUpload = signal<ActiveUpload | null>(null);
  protected readonly formatDate = formatDate;

  ngOnInit(): void {
    this.sourceFileService.getSourceFiles().subscribe({
      next: (files) => this.files.set(files),
      error: () => {
        this.files.set([]);
        this.toast.error('تعذر تحميل الملفات', 'حدث خطأ أثناء تحميل ملفاتك');
      },
    });
  }

  protected onUpload(event: FileUploadHandlerEvent): void {
    const files = event.files;
    if (!files?.length) return;

    this.uploader().clear();

    const total = files.length;
    from(files)
      .pipe(concatMap((file, i) => this.uploadOne(file, i + 1, total)))
      .subscribe({ complete: () => this.activeUpload.set(null) });
  }

  private uploadOne(file: File, index: number, total: number) {
    this.activeUpload.set({ name: file.name, index, total, progress: 0 });
    return this.sourceFileService.uploadSourceFile(file).pipe(
      tap((event) => {
        if (event.type === HttpEventType.UploadProgress && event.total) {
          const progress = Math.round((event.loaded / event.total) * 100);
          this.activeUpload.update((current) => (current ? { ...current, progress } : current));
        } else if (event.type === HttpEventType.Response && event.body) {
          this.files.update((list) => [event.body!, ...(list ?? [])]);
          this.toast.success('تم رفع الملف', `تمت إضافة "${event.body.fileName}" إلى مكتبتك`);
        }
      }),
      catchError(() => {
        this.toast.error('تعذر رفع الملف', `حدث خطأ أثناء رفع "${file.name}"`);
        return EMPTY;
      }),
    );
  }

  private deleteFile(file: SourceFileResponse) {
    return this.sourceFileService.deleteSourceFile(file.id).pipe(
      tap({
        next: () => {
          this.files.update((list) => (list ?? []).filter((f) => f.id !== file.id));
          this.toast.success('تم حذف الملف', `تمت إزالة "${file.fileName}" من مكتبتك`);
        },
        error: () => this.toast.error('تعذر حذف الملف', 'حدث خطأ أثناء حذف الملف'),
      }),
    );
  }

  protected confirmDelete(file: SourceFileResponse): void {
    this.confirmDialog.confirm({
      severity: 'danger',
      title: 'حذف الملف؟',
      message: `هل أنت متأكد من حذف "${file.fileName}"؟ لا يمكن التراجع عن هذا الإجراء.`,
      confirmLabel: 'حذف',
      icon: 'pi pi-trash',
      onConfirm: () => this.deleteFile(file),
    });
  }
}
