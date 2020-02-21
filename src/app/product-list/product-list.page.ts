import { Component, OnInit } from '@angular/core';
import { Product } from './../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  productList : Product[] = Array<Product>();

  constructor(
    private productSvc: ProductService,
  ) { }

  ngOnInit() {
    //this.productList = this.productSvc.getProductsList();
    this.productSvc.getProductListFromApi().subscribe(
      berjaya=> {
       this.productList = berjaya
      },
      gagal=> {
        console.log("gagal")
      }
    )
  }

  refresh() {
    this.ngOnInit();
  }

}
