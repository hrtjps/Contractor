import { Component, Input, OnChanges } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnChanges {

  @Input() product: Product;
  chartType: String = 'line';

  chartDatasets: Array<any> = [
    { data: [0, 0.7, 20, 0.7, 0], label: 'Price' }
  ];

  chartLabels: Array<any> = [-4, -1.96, 0, 1.96, 4];

  chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  chartOptions: any = {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        drawBorder: false,
      }]
    }

  };
  constructor() { }

  ngOnChanges() {
    this.chartLabels[0] = this.product.PlotX[0] * 2;
    this.chartLabels[1] = this.product.PlotX[0];
    this.chartLabels[2] = this.product.PlotX[1];
    this.chartLabels[3] = this.product.PlotX[2];
    this.chartLabels[4] = this.product.PlotX[2] * 2;

    this.chartDatasets[0].data[0] = this.product.PlotY[0] - this.product.PlotY[0] / 1.3;
    this.chartDatasets[0].data[1] = this.product.PlotY[0];
    this.chartDatasets[0].data[2] = this.product.PlotY[1];
    this.chartDatasets[0].data[3] = this.product.PlotY[2];
    this.chartDatasets[0].data[4] = this.product.PlotY[0] - this.product.PlotY[0] / 1.3;

  }

}
