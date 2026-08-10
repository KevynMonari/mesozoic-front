import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriaturaService {

  private apiUrl = 'http://localhost:8080/api/criaturas';

  constructor(private http: HttpClient) { }

  getCreatures(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCriaturaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getPeriodos(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/periodos');
  }

  getFosseis(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/fosseis');
  }

  getRegioes(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/regioes');
  }
}
