import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

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
