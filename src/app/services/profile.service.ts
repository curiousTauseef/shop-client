import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private auth: AuthService) {}

  headers = this.auth.getHeaders();

  getProfile(): Observable<any> {
    return this.http.get(this.baseUrl + '/profile', { headers: this.headers });
  }
}
