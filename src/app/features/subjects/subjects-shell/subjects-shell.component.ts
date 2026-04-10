import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Tabs, TabList, Tab } from 'primeng/tabs';
import { Subjects } from '@feature/subjects/models';
@Component({
  selector: 'soual-subjects-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Tabs, TabList, Tab, NgOptimizedImage],
  template: `
    <div class="flex flex-col h-full container mx-auto mt-6 px-4">
      <div class="w-full relative h-50 md:h-62.5 mb-8 rounded-2xl overflow-hidden shadow-sm">
        <img
          ngSrc="/images/questions-banner.png"
          alt="الأسئلة"
          fill
          class="object-cover"
          priority
        />
      </div>
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold">موادك الدراسية</h2>
      </div>

      <p-tabs class="mb-4" value="english">
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
  subjects = Subjects;
}
