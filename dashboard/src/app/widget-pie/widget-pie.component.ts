import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-widget-pie',
  templateUrl: './widget-pie.component.html',
  styleUrls: ['./widget-pie.component.css']
})
export class WidgetPieComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Pandora market shares in May, 2020'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'MEARN',
                y: 70.67,
                sliced: true,
                selected: true
            }, {
                name: 'PYTHON',
                y: 14.77
            },  {
                name: 'DATA SCIENCE',
                y: 4.86
            }, {
                name: 'AI',
                y: 2.63
            }, {
                name: 'ASP.NET',
                y: 1.53
            },  {
                name: 'DJANGO',
                y: 1.40
            }, {
                name: 'FLUTTER',
                y: 0.84
            }, {
                name: 'REACT',
                y: 0.51
            }, {
                name: 'Other',
                y: 2.6
            }]
        }]
    }
    }
  }

