import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { ProgressBarModule } from 'primeng/progressbar';
import type { Project } from '@feature/projects/models';
import {
  GenerateBarComponent,
  IdentityTileComponent,
  LessonUnitComponent,
  SelectionSummaryComponent,
} from '@feature/subjects/components';
import { LessonSelectionService } from '@feature/subjects/services';
import { CreateProjectDialogComponent, ProjectRailComponent } from '@feature/projects/components';
import { ProjectService } from '@feature/projects/services';
import { groupLessonsByUnit } from '@feature/subjects/utils/group-lessons.util';
import { QuestionGenerationService } from '@feature/generation/services';
import type { LessonGenerationConfig } from '@feature/generation/models';
import { GenerationConfigDialogComponent } from '@feature/generation/components';
import { ToastService } from '@shared/services';
import { ConfirmDialogService } from '@shared/components/confirm-dialog';
import { tap } from 'rxjs';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'soual-subject-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'mt-3 block' },
  providers: [LessonSelectionService],
  imports: [
    IdentityTileComponent,
    ProjectRailComponent,
    LessonUnitComponent,
    SelectionSummaryComponent,
    GenerateBarComponent,
    GenerationConfigDialogComponent,
    AccordionModule,
    ProgressBarModule,
    ButtonModule,
    CreateProjectDialogComponent,
  ],
  templateUrl: './subject-detail.component.html',
})
export class SubjectDetailComponent implements OnInit {
  private readonly selection = inject(LessonSelectionService);
  private readonly toast = inject(ToastService);
  private readonly router = inject(Router);
  private readonly projectService = inject(ProjectService);
  private readonly generationService = inject(QuestionGenerationService);
  private readonly confirmDialog = inject(ConfirmDialogService);

  protected readonly projects = signal<Project[] | null>(null);
  protected readonly isLoadingProjects = signal(false);
  protected readonly selectedProject = signal<Project | null>(null);
  protected readonly configDialogVisible = signal(false);
  protected readonly createDialogVisible = signal(false);
  protected readonly isGenerating = signal(false);

  protected readonly lessons = computed(() => this.selectedProject()?.lessons ?? []);
  protected readonly unitGroups = computed(() => groupLessonsByUnit(this.lessons()));
  protected readonly openUnits = computed(() => {
    const first = this.unitGroups()[0];
    return first ? [first.unitNumber] : [];
  });
  protected readonly totalLessons = computed(
    () => this.projects()?.reduce((total, project) => total + project.lessons.length, 0) ?? 0,
  );

  protected readonly selectedCount = this.selection.count;
  protected readonly selectedLessons = computed(() =>
    this.lessons().filter((lesson) => this.selection.isSelected(lesson.id)),
  );

  ngOnInit(): void {
    this.isLoadingProjects.set(true);
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.isLoadingProjects.set(false);
        this.projects.set(projects);
        const defaultProject = projects.find((project) => project.isDefault);
        this.selectedProject.set(defaultProject ?? projects[0] ?? null);
      },
      error: () => {
        this.isLoadingProjects.set(false);
        this.toast.error('تعذر تحميل المشاريع', 'حدث خطأ أثناء تحميل مشاريعك');
      },
    });
  }

  protected selectProject(id: string): void {
    this.selection.clear();
    const project = this.projects()?.find((p) => p.id === id);
    this.selectedProject.set(project ?? null);
  }

  protected onProjectCreated(project: Project): void {
    this.projects.update((projects) => [project, ...(projects ?? [])]);
    this.selectedProject.set(project);
  }

  protected confirmDeleteProject(project: Project): void {
    if (project.isDefault) return;
    this.confirmDialog.confirm({
      severity: 'danger',
      title: 'حذف المشروع؟',
      message: `هل أنت متأكد من حذف "${project.name}"؟ سيتم حذف كل دروسه ولا يمكن التراجع عن هذا الإجراء.`,
      confirmLabel: 'حذف',
      icon: 'pi pi-trash',
      onConfirm: () => this.deleteProject(project),
    });
  }

  private deleteProject(project: Project) {
    return this.projectService.deleteProject(project.id).pipe(
      tap({
        next: () => {
          this.projects.update((projects) => (projects ?? []).filter((p) => p.id !== project.id));
          if (this.selectedProject()?.id === project.id) {
            this.selection.clear();
            const remaining = this.projects() ?? [];
            this.selectedProject.set(remaining.find((p) => p.isDefault) ?? remaining[0] ?? null);
          }
          this.toast.success('تم حذف المشروع', `تمت إزالة "${project.name}" من مشاريعك`);
        },
        error: () => this.toast.error('تعذر حذف المشروع', 'حدث خطأ أثناء حذف المشروع'),
      }),
    );
  }

  protected onConfigConfirmed(lessons: LessonGenerationConfig[]): void {
    const project = this.selectedProject();
    if (!project || lessons.length === 0) return;

    this.isGenerating.set(true);
    this.generationService.createRequest({ project: project.id, lessons }).subscribe({
      next: (response) => {
        this.isGenerating.set(false);
        this.selection.clear();
        this.toast.success('تم إنشاء طلب التوليد', 'جاري توليد الأسئلة الآن');
        this.router.navigate(['/generation/requests', response.id]);
      },
      error: () => {
        this.isGenerating.set(false);
        this.toast.error('تعذر إنشاء الطلب', 'حدث خطأ أثناء إنشاء طلب التوليد');
      },
    });
  }
}
