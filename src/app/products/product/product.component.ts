import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getSingle();
  }

  getSingle() {
    this.productService
      .getSingle(this.route.snapshot.paramMap.get('id'))
      .subscribe(
        data => {
          this.product = data.product;
        },
        err => console.log(err)
      );
  }
}
