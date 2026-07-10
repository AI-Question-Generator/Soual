import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { SourceFileResponse } from '@feature/source-files/models/source-file.interface';

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

  uploadSourceFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this._http.post<SourceFileResponse>(`${this.API}/upload/`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  deleteSourceFile(id: string) {
    return this._http.delete<void>(`${this.API}/${id}/`);
  }
}
