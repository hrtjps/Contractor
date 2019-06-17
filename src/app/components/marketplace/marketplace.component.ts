import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {
  products = [];
  results: any = [[]];
  searchText: String;
  sortingType: String = 'Name Ascending';
  groupOptionsSelect: Array<any>;

  constructor(private productService: ProductService) {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.results = this.filter(this.products);
      },
      error => console.log(error)
    );
  }


  filter(arr) {
    return arr;
  }
  ngOnInit() {
    this.groupOptionsSelect = [
      { value: '', label: 'Name', group: true },
      { value: 'Name Ascending', label: 'Name Ascending' },
      { value: 'Name Descending', label: 'Name Descending' },
      { value: '', label: 'Rank', group: true },
      { value: 'Rank Ascending', label: 'Rank Ascending' },
      { value: 'Rank Descending', label: 'Rank Descending' },
    ];
  }
}
