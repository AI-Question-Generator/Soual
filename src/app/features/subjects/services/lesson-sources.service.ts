import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {
  LessonSource,
  LessonSourceDto,
  LessonSourcePatchDto,
} from '@feature/subjects/models/lesson-sources.interface';

@Injectable({ providedIn: 'root' })
export class LessonSourcesService {
  private readonly _http = inject(HttpClient);
  private readonly API = `${environment.apiBaseUrl}/api/curriculum/lesson-sources`;

  getLessonSources() {
    return this._http.get<LessonSource[]>(`${this.API}/`);
  }

  createLessonSource(payload: LessonSourceDto) {
    return this._http.post<LessonSource>(`${this.API}/`, payload);
  }

  getLessonSourceById(id: number) {
    return this._http.get<LessonSource>(`${this.API}/${id}/`);
  }

  updateLessonSource(id: number, payload: LessonSourceDto) {
    return this._http.put<LessonSource>(`${this.API}/${id}/`, payload);
  }

  patchLessonSource(id: number, payload: LessonSourcePatchDto) {
    return this._http.patch<LessonSource>(`${this.API}/${id}/`, payload);
  }

  deleteLessonSource(id: number) {
    return this._http.delete<void>(`${this.API}/${id}/`);
  }
}
