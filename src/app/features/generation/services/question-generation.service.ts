import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import {
  GeneratedQuestion,
  GenerationRequest,
  GenerationRequestResponse,
  GenerationRequestStatus,
  QuestionType,
} from '@feature/generation/models';

@Injectable({ providedIn: 'root' })
export class QuestionGenerationService {
  private readonly _http = inject(HttpClient);
  private readonly API = `${environment.apiBaseUrl}/api/generators`;

  getQuestionTypes() {
    return this._http.get<QuestionType[]>(`${this.API}/question-types/`);
  }

  getGeneratedQuestions() {
    return this._http.get<GeneratedQuestion[]>(`${this.API}/generated-questions/`);
  }

  getGeneratedQuestionById(id: string) {
    return this._http.get<GeneratedQuestion>(`${this.API}/generated-questions/${id}/`);
  }

  getRequests() {
    return this._http.get<GenerationRequestResponse[]>(`${this.API}/generation-requests/`);
  }

  createRequest(payload: GenerationRequest) {
    return this._http.post<GenerationRequest>(`${this.API}/generation-requests/`, payload);
  }

  getRequestById(id: string) {
    return this._http.get<GenerationRequestResponse>(`${this.API}/generation-requests/${id}/`);
  }

  getRequestStatus(id: string) {
    return this._http.get<GenerationRequestStatus>(`${this.API}/generation-requests/${id}/status/`);
  }

  deleteRequest(id: string) {
    return this._http.delete<void>(`${this.API}/generation-requests/${id}/`);
  }
}
