import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class ProductService {
    constructor(
        private httpClient: HttpClient,
    ) {

    }

    getProductListFromApi(): Observable<Product[]> {
        return this.httpClient.get<Product[]>("http://ionic-api.test/api/dbquery");
    }

    getGreeting() {
        return "Heelo from the Service!";
    }

    getProductsList(): Product[] {
        let productLs = new Array<Product>();
        for (let i = 0; i < 10; i++) {
            let productBaru = new Product();
            productBaru.setName("Product Name " + i);
            productBaru.setPrice(Math.floor(Math.random() * 100)+1);
            productLs.push(productBaru);
        }
        return productLs;
    }
}