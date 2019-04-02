import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = 'http://localhost:3000/api';
  headers = this.auth.getHeaders();

  constructor(private http: HttpClient, private auth: AuthService) {}

  get(): Observable<any> {
    return this.http.get(this.baseUrl + '/categories', {
      headers: this.headers
    });
  }

  post(data): Observable<any> {
    return this.http.post(this.baseUrl + '/categories', data, {
      headers: this.headers
    });
  }

  getSingle(id, page): Observable<any> {
    return this.http.get(this.baseUrl + '/categories/' + id + '?page=' + page, {
      headers: this.headers
    });
  }
}
