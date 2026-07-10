import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  OnInit,
  output,
  signal,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabel } from 'primeng/floatlabel';
import { Select } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { RouterLink } from '@angular/router';
import { ProjectService, LessonService } from '@feature/subjects/services';
import { SourceFileService } from '@feature/subjects/services';
import type { DomainChoice, DomainEnum, Project, ProjectDto } from '@feature/subjects/models';
import type { SourceFileResponse } from '@feature/subjects/models';
import { ControlErrorPipe } from '@shared/pipes';
import { ToastService } from '@shared/services';
import { Message } from 'primeng/message';

function pageRangeValidator(group: AbstractControl): ValidationErrors | null {
  const start = group.get('startPage')?.value;
  const end = group.get('endPage')?.value;
  if (start == null || end == null) return null;
  return end >= start ? null : { pageRangeInvalid: true };
}

@Component({
  selector: 'soual-create-project-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    DialogModule,
    StepperModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    FloatLabel,
    Select,
    InputNumberModule,
    Message,
    ControlErrorPipe,
  ],
  templateUrl: './create-project-dialog.component.html',
})
export class CreateProjectDialogComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly projectService = inject(ProjectService);
  private readonly lessonService = inject(LessonService);
  private readonly sourceFileService = inject(SourceFileService);
  private readonly toast = inject(ToastService);

  visible = model<boolean>(false);
  readonly created = output<Project>();

  protected readonly step = signal(1);
  protected readonly isSubmitting = signal(false);
  protected readonly domains = signal<DomainChoice[] | null>(null);
  protected readonly sourceFiles = signal<SourceFileResponse[] | null>(null);

  protected readonly form = this.fb.group({
    name: this.fb.nonNullable.control('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(255),
    ]),
    description: this.fb.nonNullable.control(''),
    lessons: this.fb.array([this.createLessonGroup()]),
  });

  private createLessonGroup() {
    return this.fb.group(
      {
        title: this.fb.nonNullable.control('', Validators.required),
        description: this.fb.nonNullable.control(''),
        domain: this.fb.nonNullable.control('', Validators.required),
        sourceFile: this.fb.nonNullable.control('', Validators.required),
        startPage: this.fb.control<number | null>(null, [Validators.required, Validators.min(1)]),
        endPage: this.fb.control<number | null>(null, [Validators.required, Validators.min(1)]),
      },
      { validators: pageRangeValidator },
    );
  }

  ngOnInit(): void {
    this.lessonService.getDomains().subscribe({
      next: (domains) => this.domains.set(domains),
      error: () => this.toast.error('تعذر تحميل مجالات الدروس'),
    });
    this.sourceFileService.getSourceFiles().subscribe({
      next: (files) => this.sourceFiles.set(files),
      error: () => this.toast.error('تعذر تحميل الملفات المصدر'),
    });
  }

  protected get lessons(): FormArray {
    return this.form.controls.lessons;
  }

  protected pageCountFor(lessonGroup: AbstractControl): number | null {
    const sourceFileId = lessonGroup.get('sourceFile')?.value;
    return this.sourceFiles()?.find((file) => file.id === sourceFileId)?.pageCount ?? null;
  }

  protected addLesson(): void {
    this.lessons.push(this.createLessonGroup());
  }

  protected goToLessonsStep(): void {
    if (this.form.controls.name.invalid) {
      this.form.controls.name.markAsTouched();
      return;
    }
    this.step.set(2);
  }

  protected submit(): void {
    if (this.form.invalid || this.lessons.length === 0) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    const payload: ProjectDto = {
      name: value.name,
      description: value.description || undefined,
      is_default: false,
      lessons: value.lessons.map((lesson) => ({
        title: lesson.title,
        description: lesson.description || undefined,
        domain: lesson.domain as DomainEnum,
        sources: [
          {
            source_file: lesson.sourceFile,
            start_page: lesson.startPage ?? undefined,
            end_page: lesson.endPage ?? undefined,
          },
        ],
      })),
    };

    this.isSubmitting.set(true);
    this.projectService.createProject(payload).subscribe({
      next: (project) => {
        this.isSubmitting.set(false);
        this.toast.success('تم إنشاء المشروع', `تمت إضافة ${project.name} إلى مشاريعك`);
        this.created.emit(project);
        this.reset();
        this.visible.set(false);
      },
      error: () => {
        this.isSubmitting.set(false);
        this.toast.error('تعذر إنشاء المشروع', 'حدث خطأ أثناء إنشاء المشروع');
      },
    });
  }

  protected cancel(): void {
    this.reset();
    this.visible.set(false);
  }

  private reset(): void {
    this.form.reset({ name: '', description: '' });
    this.lessons.clear();
    this.lessons.push(this.createLessonGroup());
    this.step.set(1);
  }
}
