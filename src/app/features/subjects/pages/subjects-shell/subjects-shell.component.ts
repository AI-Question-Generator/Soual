import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Tabs, TabList, Tab } from 'primeng/tabs';
import { Tooltip } from 'primeng/tooltip';
import { Subjects } from '@feature/subjects/models';

@Component({
  selector: 'soual-subjects-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  imports: [RouterOutlet, RouterLink, Tabs, TabList, Tab, Tooltip],
  template: `
    <div class="flex flex-col h-full container">
      <p-tabs class="mt-3" value="english">
        <p-tablist>
          <p-tab value="english" routerLink="/subjects/english">
            <i class="pi pi-language me-2"></i>
            اللغة الانجليزية
          </p-tab>
          @for (subject of subjects; track subject.slug) {
            <p-tab
              pTooltip="هذه المادة قيد الإعداد حالياً، ستكون متاحة قريباً بإذن الله"
              tooltipPosition="top"
              [value]="subject.slug"
              [disabled]="true"
            >
              <i class="pi pi-lock me-2"></i>
              {{ subject.name }}
            </p-tab>
          }
        </p-tablist>
      </p-tabs>
      <router-outlet />
    </div>
  `,
})
export class SubjectsShellComponent {
  protected readonly subjects = Subjects;

  private readonly router = inject(Router);
}
