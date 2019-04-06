import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';

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
    private socket: Socket
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
}
