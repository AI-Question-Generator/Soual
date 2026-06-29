import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Project, ProjectDto, ProjectPatchDto } from '@feature/subjects/models/project.interface';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly _http = inject(HttpClient);
  private readonly API = `${environment.apiBaseUrl}/api/curriculum/projects`;

  getProjects() {
    return this._http.get<Project[]>(`${this.API}/`);
  }

  createProject(payload: ProjectDto) {
    return this._http.post<ProjectDto>(`${this.API}/`, payload);
  }

  getProjectById(id: string) {
    return this._http.get<Project>(`${this.API}/${id}/`);
  }

  updateProject(id: string, payload: ProjectDto) {
    return this._http.put<ProjectDto>(`${this.API}/${id}/`, payload);
  }

  patchProject(id: string, payload: ProjectPatchDto) {
    return this._http.patch<ProjectDto>(`${this.API}/${id}/`, payload);
  }

  deleteProject(id: string) {
    return this._http.delete<void>(`${this.API}/${id}/`);
  }
}
