import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'soual-identity-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './identity-tile.component.css',
  template: `
    <section class="relative overflow-hidden rounded-2xl px-6 py-8 sm:px-10 sm:py-9 text-white">
      <div class="absolute inset-0 bg-grid-u-mask opacity-30 pointer-events-none"></div>
      <div
        class="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-white/10 blur-3xl pointer-events-none"
      ></div>
      <div
        class="absolute -bottom-24 -right-10 w-72 h-72 rounded-full bg-secondary-400/20 blur-3xl pointer-events-none"
      ></div>

      <div class="relative z-10 flex items-center justify-between gap-8 flex-wrap">
        <div class="flex flex-col gap-3 max-w-xl">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[11px] font-medium text-white/70 tracking-wide">
              الثانوية العامة · الصف الثالث
            </span>
          </div>

          <h3 class="text-3xl sm:text-4xl font-extrabold leading-tight">
            {{ subjectName() }}
          </h3>

          <p class="text-sm font-light text-white/85 leading-relaxed">
            اختر درسًا أو أكثر لتوليد أسئلة متوافقة مع المنهج
          </p>
        </div>

        <div class="flex items-center gap-4 sm:gap-5">
          <div
            class="hidden sm:flex items-center justify-center w-18 h-16 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm animate-float-slow"
          >
            <i class="pi pi-language text-4xl text-white/90"></i>
          </div>

          <div class="flex gap-3">
            <div
              class="flex flex-col items-center gap-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-3 min-w-20"
            >
              <span class="text-xl font-bold leading-none">{{ projectCount() }}</span>
              <span class="text-[10px] font-semibold tracking-wider text-white/70">مشروع</span>
            </div>
            <div
              class="flex flex-col items-center gap-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-3 min-w-20"
            >
              <span class="text-xl font-bold leading-none">{{ totalLessons() }}</span>
              <span class="text-[10px] font-semibold tracking-wider text-white/70">درس</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class IdentityTileComponent {
  subjectName = input.required<string>();
  projectCount = input.required<string>();
  totalLessons = input.required<string>();
}
