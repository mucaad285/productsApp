import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { productsService } from '../products.service';
import { NgForm } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-saveproducts',
  templateUrl: './saveproducts.component.html',
  styleUrls: ['./saveproducts.component.css']
})

export class SaveproductsComponent implements OnInit {

  public pro_types = ["Electronics", "Cosmatics", "Food Staff", "Decoration", 'Computer Accessories'];
  product_list: Product[];
  public _id: string;
  public pro_name: string;
  public pro_type: string;
  public unitprice: number;

  constructor(public _productsService: productsService) { }

  ngOnInit(): void {
    this.resetForm();
    this.getallproductsfromdb();
  };

  getallproductsfromdb() {
    this._productsService.getProducts().subscribe((res) => {
      this.product_list = res as Product[];
    })
  }

  Deleteproductsfromdb(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this._productsService.deleteProduct(_id).subscribe((res) => {
        // this._productsService.selectedProduct = new Product();
        this.resetForm(form);
        this.getallproductsfromdb();

      });
    }
  }

  createnewproduct(form: NgForm) {
    if (form.value._id == "") {
      this._productsService.saveProducts(form.value).subscribe((res) => {
        this.ngOnInit();
      })
    } else {
      this._productsService.updateProduct(form.value).subscribe((res) => {
        this.ngOnInit();
      })
    }
  }



  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this._productsService.selectedProduct = {
      _id: "",
      pro_name: "",
      pro_type: "",
      unitprice: null

    }
  }

  onEdit(prod: Product) {
    this._productsService.selectedProduct = prod;
  }


}



