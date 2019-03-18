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
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.categoryService
      .getSingle(this.route.snapshot.paramMap.get('id'))
      .subscribe(
        data => {
          this.category = data.category;
        },
        err => console.log(err)
      );
  }
}
