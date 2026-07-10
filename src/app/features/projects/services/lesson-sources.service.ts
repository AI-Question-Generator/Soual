import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {
  LessonSource,
  LessonSourceDto,
  LessonSourcePatchDto,
} from '@feature/projects/models/lesson-sources.interface';

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

  getLessonSourceById(id: string) {
    return this._http.get<LessonSource>(`${this.API}/${id}/`);
  }

  updateLessonSource(id: string, payload: LessonSourceDto) {
    return this._http.put<LessonSource>(`${this.API}/${id}/`, payload);
  }

  patchLessonSource(id: string, payload: LessonSourcePatchDto) {
    return this._http.patch<LessonSource>(`${this.API}/${id}/`, payload);
  }

  deleteLessonSource(id: string) {
    return this._http.delete<void>(`${this.API}/${id}/`);
  }
}
