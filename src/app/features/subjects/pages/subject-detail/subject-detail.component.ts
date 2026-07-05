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
import type { Project } from '@feature/subjects/models';
import {
  GenerateBarComponent,
  IdentityTileComponent,
  LessonUnitComponent,
  ProjectRailComponent,
} from '@feature/subjects/components';
import { LessonSelectionService, ProjectService } from '@feature/subjects/services';
import { groupLessonsByUnit } from '@feature/subjects/utils/group-lessons.util';
import { QuestionGenerationService } from '@feature/generation/services';
import type { LessonGenerationConfig } from '@feature/generation/models';
import { GenerationConfigDialogComponent } from '@feature/generation/components';
import { ToastService } from '@shared/services';

@Component({
  selector: 'soual-subject-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'mt-3 block' },
  providers: [LessonSelectionService],
  imports: [
    IdentityTileComponent,
    ProjectRailComponent,
    LessonUnitComponent,
    GenerateBarComponent,
    GenerationConfigDialogComponent,
    AccordionModule,
    ProgressBarModule,
  ],
  templateUrl: './subject-detail.component.html',
})
export class SubjectDetailComponent implements OnInit {
  private readonly selection = inject(LessonSelectionService);
  private readonly toast = inject(ToastService);
  private readonly router = inject(Router);
  private readonly projectService = inject(ProjectService);
  private readonly generationService = inject(QuestionGenerationService);

  protected readonly projects = signal<Project[] | null>(null);
  protected readonly isLoadingProjects = signal(false);
  protected readonly selectedProject = signal<Project | null>(null);
  protected readonly configDialogVisible = signal(false);
  protected readonly isGenerating = signal(false);

  protected readonly lessons = computed(() => this.selectedProject()?.lessons ?? []);
  protected readonly unitGroups = computed(() => groupLessonsByUnit(this.lessons()));
  /** Only the first unit starts expanded; PrimeNG owns the open/close state afterwards. */
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
