import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  formData: any;
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.formData = {};
  }

  createCategory() {
    this.categoryService.post(this.formData).subscribe(data => {
      console.log(data);
      this.formData = {};
    });
  }
}
