import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category: any;
  products: any;
  totalProducts: number;
  page = 1;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.categoryService
      .getSingle(this.route.snapshot.paramMap.get('id'), this.page - 1)
      .subscribe(
        data => {
          this.products = data.products;
          this.category = data.category;
          this.totalProducts = data.totalProducts;
        },
        err => console.log(err)
      );
  }

  get lower() {
    return 10 * (this.page - 1) + 1;
  }

  get upper() {
    return Math.min(10 * this.page, this.totalProducts);
  }
}
