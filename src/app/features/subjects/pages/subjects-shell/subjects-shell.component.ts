import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Tabs, TabList, Tab } from 'primeng/tabs';

@Component({
  selector: 'soual-subjects-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Tabs, TabList, Tab],
  template: `
    <div class="flex flex-col h-full container">
      <p-tabs class="mt-3" value="english">
        <p-tablist>
          @for (subject of subjects; track subject.slug) {
            <p-tab
              routerLinkActive
              [value]="subject.slug"
              [routerLink]="['/subjects', subject.slug]"
            >
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
  subjects = [
    { name: 'English', slug: 'english' },
    { name: 'Math', slug: 'math' },
    { name: 'Science', slug: 'science' },
  ];
}
