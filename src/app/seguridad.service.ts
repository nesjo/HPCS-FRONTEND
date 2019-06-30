import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class seguridadService {

  private baseUrl = '/hpcs/Seguridad';

  constructor(private http: HttpClient) { }

  getseguridad(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createseguridad(seguridad: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, seguridad);
  }

  updateseguridad(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteseguridad(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getseguridadList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}