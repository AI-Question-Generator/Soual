import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Project } from '@feature/subjects/models';

@Component({
  selector: 'soual-project-rail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  imports: [ButtonModule],
  template: `
    <section class="rounded-2xl bg-white border border-slate-200 shadow-sm p-4">
      <header class="flex items-center justify-between mb-4">
        <h3 class="text-base font-bold text-slate-800">المشاريع</h3>
        <p-button
          icon="pi pi-plus"
          size="small"
          ariaLabel="مشروع جديد"
          [rounded]="true"
          (onClick)="createProject.emit()"
        />
      </header>

      @if (projects().length === 0) {
        <p class="text-xs text-slate-500 text-center py-6">لا توجد مشاريع بعد</p>
      } @else {
        <div class="flex flex-col gap-3">
          @for (project of projects(); track project.id) {
            @if (project.id === activeProjectId()) {
              <div
                class="rounded-xl p-4 cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md bg-linear-to-br from-main-700 to-main-500 text-white shadow-md ring-1 ring-main-400"
                (click)="selectedProjectId.emit(project.id)"
              >
                <div class="flex items-start justify-between gap-2">
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
                  <i class="pi pi-check-circle text-white/90 text-sm shrink-0"></i>
                </div>

                <div class="mt-3 flex items-center gap-2">
                  <span class="bg-white/15 text-white text-xs font-semibold rounded-md px-2 py-1">
                    {{ project.lessonCount }} درس
                  </span>
                  @if (project.isDefault) {
                    <span class="bg-white/15 text-white text-xs font-semibold rounded-md px-2 py-1">
                      افتراضي
                    </span>
                  }
                </div>
              </div>
            } @else {
              <div
                class="rounded-xl border border-slate-200 p-4 cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md hover:border-main-200"
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

                <div class="mt-3 flex items-center gap-2">
                  <span
                    class="bg-slate-100 text-slate-600 text-xs font-semibold rounded-md px-2 py-1"
                  >
                    {{ project.lessonCount }} درس
                  </span>
                  @if (project.isDefault) {
                    <span
                      class="bg-main-50 text-main-700 text-xs font-semibold rounded-md px-2 py-1"
                    >
                      افتراضي
                    </span>
                  }
                </div>
              </div>
            }
          }
        </div>
      }
    </section>
  `,
})
export class ProjectRailComponent {
  projects = input.required<Project[]>();
  activeProjectId = input<string | null>(null);
  readonly selectedProjectId = output<string>();
  readonly createProject = output<void>();
}
