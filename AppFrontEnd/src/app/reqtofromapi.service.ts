import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})

export class ReqtofromapiService {

  readonly ROOT_URL;
  selectedProduct: Product;
  newuser: Users;

  constructor(private http: HttpClient) {
    this.selectedProduct = new Product();
    this.ROOT_URL = 'http://localhost:3000';
  }
  getProduct() {
    return this.http.get(`${this.ROOT_URL}/products`);
  }

  getProductbyID(url: String) {
    return this.http.get(`${this.ROOT_URL}/${url}`);
  }
  postProduct(url: string, _product: Product) {
    return this.http.post(`${this.ROOT_URL}/${url}`, _product);
  }
  patchProduct(url: String, _product: Product) {
    return this.http.patch(`${this.ROOT_URL}/${url}`, _product);
  }

  deleteProduct(url: string) {
    return this.http.delete(`${this.ROOT_URL}/${url}`);
  }

  postUsers(url: string, _user: Users) {
    return this.http.post(`${this.ROOT_URL}/${url}`, _user);
  }


}
