import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [];
  slides: any = [[]];

  constructor(private productService: ProductService) {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
        products => {
          this.products = products;
          this.slides = this.chunk(this.products, 3);
        },
        error =>  console.log(error)
      );
  }


  chunk(arr, chunkSize) {
    let results = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      results.push(arr.slice(i, i + chunkSize));
    }
    return results;
  }
  ngOnInit() {
  }
}
