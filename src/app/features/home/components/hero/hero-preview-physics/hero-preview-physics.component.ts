import { ChangeDetectionStrategy, Component, computed, signal, OnDestroy } from '@angular/core';

@Component({
  selector: 'soual-hero-preview-physics',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-preview-physics.component.html',
  styleUrl: './hero-preview-physics.component.css',
  host: {
    class: 'relative sm:absolute sm:top-20 lg:top-28 sm:right-1 z-30 animate-float',
  },
})
export class HeroPreviewPhysicsComponent implements OnDestroy {
  totalSeconds = signal(10 * 60);
  timerId: number;

  minutesTimer = computed(() => Math.floor(this.totalSeconds() / 60));
  secondsTimer = computed(() => String(this.totalSeconds() % 60).padStart(2, '0'));

  constructor() {
    this.timerId = setInterval(() => {
      this.totalSeconds.update((s) => {
        if (s <= 0) {
          clearInterval(this.timerId);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timerId) clearInterval(this.timerId);
  }
}
