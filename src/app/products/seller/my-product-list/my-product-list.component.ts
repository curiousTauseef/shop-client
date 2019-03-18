import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-my-product-list',
  templateUrl: './my-product-list.component.html',
  styleUrls: ['./my-product-list.component.scss']
})
export class MyProductListComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getSellerProducts();
  }

  getSellerProducts() {
    this.productService.getSellerProducts().subscribe(
      data => {
        this.products = data.products;
      },
      err => console.log(err)
    );
  }
}
