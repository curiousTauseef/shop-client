import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getHeaders() {
    const token = this.getToken();
    return token ? new HttpHeaders().set('Authorization', token) : null;
  }

  register(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/accounts/register', data);
  }

  login(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/accounts/login', data);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }
}
