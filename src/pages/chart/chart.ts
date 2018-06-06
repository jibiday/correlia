import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as Chart from 'chart.js';
import * as moment from 'moment';
import {DatasetService} from '../../services/datasetService';

@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html'
})
export class ChartPage implements OnInit {

  constructor(public navCtrl: NavController,
              private datasetService: DatasetService) {
  }

  ctx;
  myChart;

  ngOnInit() {
    this.ctx = 'myChart';
    this.myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: [],
      },
      options: {
        responsive: true,
        layout: {
          padding: {
            top: 15
          }
        },
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true
          }
        },
        tooltips: {
          mode: 'x',
          displayColors: false,
          callbacks: {
            title: (tooltips, data) => {
              return moment(data['x']).format('D MMMM YYYY');
            }
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            type: 'linear',
            distribution: 'linear',
            ticks: {
              display: false
            }
          }],
          yAxes: [
            {
              gridLines: {
                display: true,
                drawTicks: false
              },
              id: 'intensity',
              position: 'left',
              scaleLabel: {
                display: false,
                labelString: 'intensity'
              },
              ticks: {
                display: false,
                beginAtZero: true
              }
            },
            {
              gridLines: {
                display: false
              },
              id: 'dosage',
              position: 'right',
              scaleLabel: {
                display: false,
                fontSize: 9,
                labelString: 'dosage'
              },
              ticks: {
                display: false,
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    this.myChart.options.scales.yAxes[0].ticks.suggestedMax = 10;
    this.drawPointLabels();

  }

  drawPointLabels() {
    Chart.plugins.register({
      afterDatasetsDraw: function(chart: any) {
        let ctx = chart.ctx;

        chart.data.datasets.forEach(function(dataset, i) {
          let meta = chart.getDatasetMeta(i);
          if (!meta.hidden) {
            meta.data.forEach(function(element, index) {
              console.log(element);
              if (element._yScale.id == 'dosage') {
                // Draw the text in black, with the specified font
                ctx.fillStyle = 'rgb(0, 0, 0)';

                let fontSize = 9;
                let fontStyle = 'bold';
                let fontFamily = 'Helvetica Neue';
                ctx.font = Chart['helpers'].fontString(fontSize, fontStyle, fontFamily);

                // Just naively convert to string for now
                let dataString = dataset.data[index].y.toString();

                // Make sure alignment settings are correct
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                // let padding = 5;
                let padding = 4;
                let position = element.tooltipPosition();
                ctx.fillStyle = element._model.backgroundColor;
                // ctx.fillRect(position.x - 7, position.y - 7, 14, 14);
                // ctx.arc(position.x, position.y, 8, 0, 2 * Math.PI, true);
                // ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.fillText(dataString, position.x - (fontSize / 2) - padding, position.y - (fontSize / 2) - padding);
                // ctx.fillText(dataString, position.x, position.y);
              }
            });
          }
        });
      }
    });
  }

  ionViewWillEnter() {
    this.myChart.data.datasets = this.datasetService.getAll();
    this.myChart.update();
  }
}
