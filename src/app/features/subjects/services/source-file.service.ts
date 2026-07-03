import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { SourceFileDto, SourceFileResponse } from '@feature/subjects/models/source-file.interface';

@Injectable({ providedIn: 'root' })
export class SourceFileService {
  private readonly _http = inject(HttpClient);
  private readonly API = `${environment.apiBaseUrl}/api/curriculum/source-files`;

  getSourceFiles() {
    return this._http.get<SourceFileResponse[]>(`${this.API}/`);
  }

  getSourceFileById(id: string) {
    return this._http.get<SourceFileResponse>(`${this.API}/${id}/`);
  }

  uploadSourceFile(payload: SourceFileDto) {
    return this._http.post<SourceFileResponse>(`${this.API}/`, payload);
  }

  deleteSourceFile(id: string) {
    return this._http.delete<void>(`${this.API}/${id}/`);
  }
}
