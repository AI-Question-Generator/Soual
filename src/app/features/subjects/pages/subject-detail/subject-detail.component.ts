import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import type { SubjectName } from '@feature/subjects/models';
import {
  GenerateBarComponent,
  IdentityTileComponent,
  LessonRowComponent,
  ProjectRailComponent,
} from '@feature/subjects/components';
import { LessonSelectionService } from '@feature/subjects/services';
import { ToastService } from '@shared/services';
import { mockProjectsFor } from '@feature/subjects/mocks/subject-detail.mock';

@Component({
  selector: 'soual-subject-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'mt-3 block' },
  providers: [LessonSelectionService],
  imports: [IdentityTileComponent, ProjectRailComponent, LessonRowComponent, GenerateBarComponent],
  template: `
    <div class="flex flex-col gap-6 pb-32">
      <soual-identity-tile
        [subjectName]="name()"
        [projectCount]="projectCount().toString()"
        [totalLessons]="totalLessons().toString()"
      />

      <div class="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
        <soual-project-rail [projects]="projects()" (selectedProjectId)="selectProject($event)" />

        <section class="rounded-2xl bg-white border border-slate-200 shadow-sm p-5">
          <header class="flex items-center justify-between mb-4">
            <h3 class="text-base font-bold text-slate-800">{{ selectedProject().name }}</h3>
            <span class="text-xs text-slate-500">{{ lessons().length }} درس</span>
          </header>

          @if (lessons().length === 0) {
            <p class="text-sm text-slate-500 text-center py-8">لا توجد دروس في هذا المشروع</p>
          } @else {
            <div class="flex flex-col gap-2">
              @for (lesson of lessons(); track lesson.id) {
                <soual-lesson-row [lesson]="lesson" />
              }
            </div>
          }
        </section>
      </div>
    </div>

    <soual-generate-bar [selectedCount]="selectedCount()" (generate)="onGenerate()" />
  `,
})
export class SubjectDetailComponent {
  name = input.required<string>();
  slug = input.required<SubjectName>();

  private readonly selection = inject(LessonSelectionService);
  private readonly toast = inject(ToastService);

  protected readonly projects = computed(() => mockProjectsFor(this.slug()));
  private readonly _selectedProjectId = signal<string | null>(null);

  protected readonly selectedProject = computed(() => {
    const projects = this.projects();
    const id = this._selectedProjectId();
    return (
      projects.find((project) => project.id === id) ??
      projects.find((project) => project.isDefault) ??
      projects[0]
    );
  });

  protected readonly lessons = computed(() => this.selectedProject().lessons);
  protected readonly projectCount = computed(() => this.projects().length);
  protected readonly totalLessons = computed(() => {
    const defaultProject = this.projects().find((project) => project.isDefault);
    return defaultProject?.lessons.length ?? 0;
  });
  protected readonly selectedCount = this.selection.count;

  protected selectProject(id: string): void {
    this.selection.clear();
    this._selectedProjectId.set(id);
  }

  protected onGenerate(): void {
    this.toast.success('جاري توليد الأسئلة', `تم اختيار ${this.selectedCount()} درس`);
  }
}
