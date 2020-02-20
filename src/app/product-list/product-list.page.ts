import { Component, OnInit } from '@angular/core';
import { Product } from './../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  productList : Product[] = Array<Product>();

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      let productBaru = new Product();
      productBaru.setName("Product Name " + i);
      productBaru.setPrice(Math.floor(Math.random() * 100)+1);
      this.productList.push(productBaru);
    }
    console.log(this.productList);
  }

}
