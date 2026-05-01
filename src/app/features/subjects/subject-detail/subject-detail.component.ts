import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { IdentityTileComponent } from '@feature/subjects/components/identity-tile/identity-tile.component';
import { SubjectName } from '@feature/subjects/models';
import { SubjectsService } from '@feature/subjects/services/subjects.service';

@Component({
  selector: 'soual-subject-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'mt-3' },
  imports: [IdentityTileComponent],
  template: `
    <soual-identity-tile
      [subjectName]="name()"
      [projectCount]="projectCount()"
      [unitCount]="unitCount()"
      [totalLessons]="totalLessons()"
    />
  `,
})
export class SubjectDetailComponent {
  slug = input.required<SubjectName>();
  name = input.required<string>();

  private readonly _subjectsSvc = inject(SubjectsService);

  private readonly _detailResource = rxResource({
    params: () => ({ slug: this.slug() }),
    stream: ({ params }) => this._subjectsSvc.getSubjectDetail(params.slug),
  });

  readonly units = computed(() => this._detailResource.value()?.units ?? []);
  readonly projects = computed(() => this._detailResource.value()?.projects ?? []);
  readonly projectCount = computed(() => String(this.projects().length));
  readonly unitCount = computed(() => String(this.units().length));
  readonly totalLessons = computed(() =>
    String(this.units().reduce((sum, u) => sum + u.lessons.length, 0)),
  );
}
