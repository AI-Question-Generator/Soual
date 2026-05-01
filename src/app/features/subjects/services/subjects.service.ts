import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ENGLISH_UNITS } from '@feature/subjects/data/english-units.data';
import {
  DEFAULT_PROJECT,
  INITIAL_CUSTOM_PROJECTS,
} from '@feature/subjects/data/initial-projects.data';
import { Subjects, SubjectDetail, SubjectName } from '@feature/subjects/models';

@Injectable({ providedIn: 'root' })
export class SubjectsService {
  private readonly _http = inject(HttpClient);
  private readonly API = '/api/subjects';

  getSubjectDetail(slug: SubjectName): Observable<SubjectDetail> {
    // TODO: swap to real backend when ready:
    // return this._http.get<SubjectDetail>(`${this.API}/${slug}`);
    const name = Subjects.find((s) => s.slug === slug)?.name ?? '';

    if (slug === 'english') {
      return of({
        slug,
        name,
        units: ENGLISH_UNITS,
        projects: [DEFAULT_PROJECT, ...INITIAL_CUSTOM_PROJECTS],
      });
    }

    return of({ slug, name, units: [], projects: [] });
  }
}
