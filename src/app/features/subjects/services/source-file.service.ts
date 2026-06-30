import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {
  SourceFile,
  SourceFileDto,
  SourceFilePatchDto,
  SourceFileResponse,
} from '@feature/subjects/models/source-file.interface';

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
    return this._http.post<SourceFile>(`${this.API}/`, payload);
  }

  editSourceFile(id: string, payload: SourceFileDto) {
    return this._http.put<SourceFile>(`${this.API}/${id}/`, payload);
  }

  patchSourceFile(id: string, payload: SourceFilePatchDto) {
    return this._http.patch<SourceFile>(`${this.API}/${id}/`, payload);
  }

  deleteSourceFile(id: string) {
    return this._http.delete<void>(`${this.API}/${id}/`);
  }
}
