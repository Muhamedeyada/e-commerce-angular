import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductRequestsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('https://dummyjson.com/products');
  }
  getProductsDetials(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
  
}
