import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:3000/api';
  headers = this.auth.getHeaders();
  constructor(private auth: AuthService, private http: HttpClient) {}

  getSellerProducts(): Observable<any> {
    return this.http.get(this.baseUrl + '/products/seller', {
      headers: this.headers
    });
  }

  getSingle(id): Observable<any> {
    return this.http.get(this.baseUrl + '/products/' + id);
  }
}
