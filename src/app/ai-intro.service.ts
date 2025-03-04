import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiIntroService {
  private apiUrl = 'http://localhost:8080/api/generate-intro';

  constructor(private http: HttpClient) {}

  generateIntro(script: string): Observable<{ intro: string }> {
    return this.http.post<{ intro: string }>(this.apiUrl, { script });
  }
}
