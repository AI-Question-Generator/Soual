import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'soual-hero-preview-ai-generator',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-preview-ai-generator.component.html',
  host: {
    class: 'relative sm:absolute sm:top-10 lg:top-18 sm:left-0 z-20 animate-float-slow',
  },
})
export class HeroPreviewAiGeneratorComponent implements OnInit, OnDestroy {
  totalQuestions = 20;
  duration = 100000;

  loadingProgress = signal(0);

  questionsGenerated = computed(() => {
    const rawCount = (this.loadingProgress() / 100) * this.totalQuestions;
    return Math.min(Math.floor(rawCount), this.totalQuestions);
  });

  isComplete = computed(() => this.loadingProgress() === 100);

  private intervalId: number | undefined;

  ngOnInit() {
    this.startSimulation();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  startSimulation() {
    const steps = 100;
    const stepTime = this.duration / steps;

    this.intervalId = setInterval(() => {
      this.loadingProgress.update((val) => {
        if (val >= 100) {
          this.clearTimer();
          return 100;
        }
        return val + 1;
      });
    }, stepTime);
  }

  clearTimer() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
