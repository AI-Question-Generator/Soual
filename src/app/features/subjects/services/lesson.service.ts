import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Lesson, LessonDto, LessonPatchDto } from '@feature/subjects/models/lesson.interface';

@Injectable({ providedIn: 'root' })
export class LessonService {
  private readonly _http = inject(HttpClient);
  private readonly API = `${environment.apiBaseUrl}/api/curriculum/lessons`;

  getLessons() {
    return this._http.get<Lesson[]>(`${this.API}/`);
  }

  createLesson(payload: LessonDto) {
    return this._http.post<Lesson>(`${this.API}/`, payload);
  }

  getLessonById(id: number) {
    return this._http.get<Lesson>(`${this.API}/${id}/`);
  }

  updateLesson(id: number, payload: LessonDto) {
    return this._http.put<Lesson>(`${this.API}/${id}/`, payload);
  }

  patchLesson(id: number, payload: LessonPatchDto) {
    return this._http.patch<Lesson>(`${this.API}/${id}/`, payload);
  }

  deleteLesson(id: number) {
    return this._http.delete<void>(`${this.API}/${id}/`);
  }
}
