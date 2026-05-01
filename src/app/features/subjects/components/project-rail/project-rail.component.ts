import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { Project } from '@feature/subjects/models';

@Component({
  selector: 'soual-project-rail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <section class="rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200 shadow-sm p-4">
      <header class="flex items-center justify-between mb-4">
        <h3 class="text-base font-bold text-slate-800">المشاريع</h3>
        <button
          type="button"
          class="rounded-full w-8 h-8 flex-center bg-main-500 text-white text-lg font-bold leading-none transition-colors hover:bg-main-600"
        >
          +
        </button>
      </header>

      @if (projects().length === 0) {
        <p class="text-xs text-slate-500 text-center py-6">لا توجد مشاريع بعد</p>
      } @else {
        <div class="flex flex-col gap-3">
          @if (defaultProject(); as project) {
            <div
              class="rounded-xl p-4 cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md bg-linear-to-br from-main-700 to-main-500 text-white"
              (click)="selectedProjectId.emit(project.id)"
            >
              <div class="flex flex-col gap-1 min-w-0">
                <h4 class="font-bold text-base leading-tight">
                  {{ project.name }}
                </h4>
                @if (project.description) {
                  <p class="text-white/85 text-xs leading-relaxed line-clamp-2">
                    {{ project.description }}
                  </p>
                }
              </div>

              <div class="mt-3">
                <span class="bg-white/15 text-white text-xs font-semibold rounded-md px-2 py-1">
                  {{ project.lessonCount }} درس
                </span>
              </div>
            </div>
          }
          @for (project of customProjects(); track project.id) {
            <div
              class="rounded-xl border border-slate-200 p-4 cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
              (click)="selectedProjectId.emit(project.id)"
            >
              <div class="flex flex-col gap-1 min-w-0">
                <h4 class="text-slate-800 font-bold text-base leading-tight">
                  {{ project.name }}
                </h4>
                @if (project.description) {
                  <p class="text-slate-500 text-xs leading-relaxed line-clamp-2">
                    {{ project.description }}
                  </p>
                }
              </div>

              <div class="mt-3">
                <span
                  class="bg-slate-100 text-slate-600 text-xs font-semibold rounded-md px-2 py-1"
                >
                  {{ project.lessonCount }} درس
                </span>
              </div>
            </div>
          }
        </div>
      }
    </section>
  `,
})
export class ProjectRailComponent {
  projects = input.required<Project[]>();
  readonly selectedProjectId = output<string>();

  protected readonly defaultProject = computed(() => {
    return this.projects().find((p) => p.isDefault);
  });

  protected readonly customProjects = computed(() => {
    return this.projects().filter((p) => !p.isDefault);
  });
}
