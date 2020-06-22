import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { ReqtofromapiService } from './reqtofromapi.service';



@Injectable({
  providedIn: 'root'
})
export class productsService {

  public product_list: Product[];
  selectedProduct: Product;

  constructor(private _Reqtofromapi: ReqtofromapiService) { }

  saveProducts(pr: Product) {
    return this._Reqtofromapi.postProduct('products/save', pr);
  }

  getProducts() {
    return this._Reqtofromapi.getProduct();
  }

  deleteProduct(_id: String) {
    return this._Reqtofromapi.deleteProduct(`products/deleteproducts/${_id}`);
  }

  updateProduct(prodt: Product) {
    return this._Reqtofromapi.patchProduct(`products/updateproducts/${prodt._id as string}`, prodt);
  }

}

