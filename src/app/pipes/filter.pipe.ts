import { Product } from '../components/product-card/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Product[], data?: any): Product[] {
    let result: Product[];
    result = items;
    if (!items) {
      return [];
    }

    if (data.searchText) {
      const strFilter = data.searchText.toLocaleLowerCase();
      result = result.filter(item => {
        return item.SellerName.toLocaleLowerCase().includes(strFilter) ||
          item.TypeName.toLocaleLowerCase().includes(strFilter);
      });
    }
    if (result) {
      const sorting = data.sortingType;
      result = result.sort((a: Product, b: Product) => {
        if (data.sortingType === 'Name Ascending') {
          return a.SellerName.localeCompare(b.SellerName);
        } else if (data.sortingType === 'Name Descending') {
          return b.SellerName.localeCompare(a.SellerName);
        } else if (data.sortingType === 'Rank Ascending') {
          return (a.SellerRank - b.SellerRank);
        } else {
          return (b.SellerRank - a.SellerRank);
        }
      });
    }
    return result;
  }

}
