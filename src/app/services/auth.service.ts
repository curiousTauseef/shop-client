import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/accounts/register', data);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }
}
