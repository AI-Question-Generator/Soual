import { Injectable, computed, signal } from '@angular/core';

@Injectable()
export class LessonSelectionService {
  private readonly _ids = signal<ReadonlySet<number>>(new Set());

  readonly ids = this._ids.asReadonly();
  readonly count = computed(() => this._ids().size);

  isSelected(id: number): boolean {
    return this._ids().has(id);
  }

  toggle(id: number): void {
    this._ids.update((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  clear(): void {
    this._ids.set(new Set());
  }
}
