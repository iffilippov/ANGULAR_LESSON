import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/data/products.service';
import { IProduct } from 'src/app/interface/product';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
  products: IProduct[] = []
  constructor(private _productService: ProductsService) { }
  ngOnInit(): void {
    this._productService.getList()
      .subscribe(response => {
        this.products = response.data
      })
  }
}
