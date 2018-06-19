import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as Chart from 'chart.js';
import * as moment from 'moment';
import {PointProvider} from "../../providers/point/point";
import {Point, Value} from "../../domain/Symptom";
import {ValueProvider} from "../../providers/value/value";

@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html'
})
export class ChartPage implements OnInit {

  constructor(public navCtrl: NavController,
              private pointProvider: PointProvider,
              private valueProvider: ValueProvider) {
  }

  ctx;
  myChart;
  chartView = 'overall';
  points: Point[] = [];
  values: Value[] = [];
  datasets: Dataset[] = [];

  ngOnInit() {
    this.chartView = 'overall';
    this.ctx = 'myChart';
    this.myChart = new Chart(this.ctx, {
      type: 'line',
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
              return moment(tooltips[0].xLabel).format('D MMMM YYYY HH:mm');
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
    this.datasets.forEach(dataset => {
      this.myChart.data.datasets.push({
        label: dataset.value.name,
        data: dataset.points,
        backgroundColor: [
          dataset.value.color
        ],
        borderColor: [
          dataset.value.color
        ],
        fill: false,
        borderWidth: 2,
        yAxisID: 'intensity'
      })
    });

    // this.drawPointLabels();

  }

 updateDatasets() {
   this.datasets = [];
   this.pointProvider.getAll().then(points => {
     this.points = points;
     this.valueProvider.getAll().then(values => {
       this.values = values;
       this.points.forEach(point => {
         let dataset = this.datasets.find(dataset => dataset.value.id === point.valueId);
         if (!dataset) {
           dataset = new Dataset();
           dataset.value = this.values.find(val => val.id === point.valueId);
           this.datasets.push(dataset);
         }
         dataset.points.push(point);
       });
       this.myChart.data.datasets = [];
       this.datasets.forEach(dataset => {
         this.myChart.data.datasets.push({
           label: dataset.value.name,
           data: dataset.points,
           backgroundColor: [
             dataset.value.color
           ],
           borderColor: [
             dataset.value.color
           ],
           fill: false,
           borderWidth: 2,
           yAxisID: 'intensity'
         })
       });
       this.myChart.update();
     });
   });
  }

  drawPointLabels() {
    Chart.plugins.register({
      afterDatasetsDraw: (chart: any) => {
        let ctx = chart.ctx;

        chart.data.datasets.forEach((dataset, i) => {
          let meta = chart.getDatasetMeta(i);
          if (!meta.hidden) {
            meta.data.forEach((element, index) => {
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
    this.updateDatasets();
  }
}

export class Dataset {
  value: Value;
  points: Point[] = [];
}
