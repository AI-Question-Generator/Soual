import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'soual-generate-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'fixed inset-x-0 bottom-0 z-40' },
  template: `
    <div
      class="flex items-center justify-between gap-4 bg-white border-t border-slate-200 shadow-[0_-4px_12px_-2px_rgba(0,0,0,0.08)] p-5"
    >
      <div class="flex flex-col gap-2">
        <span class="text-md font-bold text-slate-800 leading-tight">
          {{ headlineText() }}
        </span>
        <span class="text-sm text-slate-500">
          {{ helperText() }}
        </span>
      </div>

      <button
        type="button"
        [class]="buttonClasses()"
        [disabled]="isDisabled()"
        (click)="generate.emit()"
      >
        توليد الأسئلة
      </button>
    </div>
  `,
})
export class GenerateBarComponent {
  selectedCount = input<number>(0);
  isLoading = input<boolean>(false);
  readonly generate = output<void>();

  protected readonly isDisabled = computed(() => this.selectedCount() === 0 || this.isLoading());

  protected readonly buttonClasses = computed(() => {
    const base = 'rounded-xl px-5 py-2.5 text-sm font-bold transition-colors';
    const state = this.isDisabled()
      ? 'bg-slate-100 text-slate-400'
      : 'text-white bg-main-500 hover:bg-main-600 cursor-pointer';

    return `${base} ${state}`;
  });

  protected readonly headlineText = computed(() => {
    const count = this.selectedCount();
    if (count === 0) return 'لم يتم اختيار أي درس';
    if (count === 1) return 'تم اختيار درس واحد';
    if (count === 2) return 'تم اختيار درسين';
    return `تم اختيار ${count} دروس`;
  });

  protected readonly helperText = computed(() =>
    this.isLoading() ? 'جاري التوليد...' : 'سيتم توليد أسئلة بناءً على اختيارك',
  );
}
