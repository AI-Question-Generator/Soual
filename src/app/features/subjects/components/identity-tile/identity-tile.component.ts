import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'soual-identity-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './identity-tile.component.css',
  template: `
    <section
      class="text-white flex items-center justify-between gap-6 flex-wrap rounded-xl px-8 py-7"
    >
      <div class="flex flex-col gap-2 max-w-xl">
        <span class="text-xs font-medium text-white/80 tracking-wide">
          الثانوية العامة · الصف الثالث
        </span>
        <h3 class="text-3xl font-extrabold leading-tight">
          {{ subjectName() }}
        </h3>
        <p class="text-sm font-light text-white/85 leading-relaxed">
          اختر درسًا أو أكثر لتوليد أسئلة متوافقة مع المنهج
        </p>
      </div>

      <div class="flex gap-6">
        <div class="flex flex-col items-center">
          <span class="text-2xl font-bold leading-none">
            {{ projectCount() }}
          </span>
          <span class="mt-2 text-[11px] font-semibold tracking-wider text-white/70">PROJECTS</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-2xl font-bold leading-none">
            {{ unitCount() }}
          </span>
          <span class="mt-2 text-[11px] font-semibold tracking-wider text-white/70">UNITS</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-2xl font-bold leading-none">
            {{ totalLessons() }}
          </span>
          <span class="mt-2 text-[11px] font-semibold tracking-wider text-white/70">LESSONS</span>
        </div>
      </div>
    </section>
  `,
})
export class IdentityTileComponent {
  subjectName = input.required<string>();
  projectCount = input.required<string>();
  unitCount = input.required<string>();
  totalLessons = input.required<string>();
}
