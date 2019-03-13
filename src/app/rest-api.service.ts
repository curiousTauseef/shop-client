import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  constructor(private http: HttpClient) {}

  get(link: string): Observable<any> {
    return this.http.get(link);
  }

  post(link: string, body: any): Observable<any> {
    return this.http.post(link, body);
  }
}
