import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { OrderService } from 'src/app/services/order.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: any;
  formData: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private socket: Socket,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.getSingle();
    this.formData = {};
    this.socket.on('refreshPage', () => {
      this.getSingle();
    });
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

  review() {
    const form = {
      title: this.formData.title,
      description: this.formData.description,
      rating: this.formData.rating,
      productId: this.product._id
    };

    this.productService.postReview(form).subscribe(
      () => {
        this.socket.emit('refresh', {});
        this.formData = {};
      },
      err => console.log(err)
    );
  }

  addToCart() {
    this.orderService.addToCart(this.product);
    this.socket.emit('refresh', {});
  }

  removeFromCart() {
    this.orderService.removeFromCart(this.product);
    this.socket.emit('refresh', {});
  }

  compareCartItem() {
    return _.some(this.orderService.getCart(), [
      'id',
      this.route.snapshot.paramMap.get('id')
    ]);
  }
}
