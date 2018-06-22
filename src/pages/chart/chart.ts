import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as Chart from 'chart.js';
import * as moment from 'moment';
import {PointProvider} from '../../providers/point/point';
import {Point, Value} from '../../domain/Symptom';
import {ValueProvider} from '../../providers/value/value';

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
    Chart.defaults.global.elements.point.hitRadius = 5;
    Chart.defaults.global.elements.point.radius = 1;
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
            usePointStyle: true,
            filter: (legendItem) => {
              return !legendItem.text.includes('(trend)');
            },
          },
          onClick: (e, legendItem) => {
            let index = legendItem.datasetIndex;
            let i1 = Math.floor(index / 2) * 2;
            let i2 = i1 + 1;
            let ci = this.myChart;
            [ci.getDatasetMeta(i1),
              ci.getDatasetMeta(i2)].forEach(function (meta) {
              meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
            });
            ci.update();
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
              id: 'intensity',
              position: 'left',
              gridLines: {
                display: true,
                drawTicks: false
              },
              scaleLabel: {
                display: false,
                labelString: 'intensity'
              },
              ticks: {
                display: false,
                beginAtZero: true,
                suggestedMin: -5,
                suggestedMax: 10,
                stepSize: 1
              }
            },
            {
              id: 'negative',
              position: 'left',
              gridLines: {
                display: true,
                drawTicks: false,
                zeroLineWidth: 3
              },
              scaleLabel: {
                display: false,
                labelString: 'negative'
              },
              ticks: {
                display: false,
                suggestedMin: -5,
                suggestedMax: 10,
                stepSize: 1
              }
            },
            {
              id: 'natural',
              position: 'left',
              gridLines: {
                display: false,
                drawTicks: false
              },
              scaleLabel: {
                display: false,
                labelString: 'natural'
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
        yAxisID: dataset.value.range.name
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
           let value = this.values.find(val => val.id === point.valueId);
           if (value) {
             dataset.value = value;
             this.datasets.push(dataset);
           }
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
           showLine: false,
           fill: false,
           borderWidth: 2,
           yAxisID: dataset.value.range.name
         })
       });
       this.createMovingAverageDatasets();
       this.myChart.update();
     });
   });
  }

  createMovingAverageDatasets() {
    this.datasets.forEach(dataset => {
      let mADataset = new Dataset();
      dataset.points.forEach((point, index, array) => {
        mADataset.value = dataset.value;
        if (index !== 0) {
          let mAMiddlePoint = JSON.parse(JSON.stringify(point));
          mAMiddlePoint.y = (array[index - 1].y + array[index].y) / 2;
          mAMiddlePoint.x = (array[index - 1].x + array[index].x) / 2;
          mADataset.points.push(mAMiddlePoint);
        }
        if (index === 0 || index === array.length - 1) {
          let mAPoint = JSON.parse(JSON.stringify(point));
          mADataset.points.push(mAPoint);
        }
      });
      this.myChart.data.datasets.push({
        label: `${mADataset.value.name} (trend)`,
        data: mADataset.points,
        backgroundColor: [
          this.hexToRgba(mADataset.value.color, 0.3)
        ],
        borderColor: [
          this.hexToRgba(mADataset.value.color, 0.3)
        ],
        pointRadius: 0,
        fill: dataset.value.range.name === 'negative',
        borderWidth: 2,
        yAxisID: dataset.value.range.name
      });
    });
    this.myChart.data.datasets.sort((d1, d2) => d1.label < d2.label ? -1 : 1);
    this.myChart.update();
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

  hexToRgba(hex, alpha){
    hex   = hex.replace('#', '');
    let r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
    let g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
    let b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
    if ( alpha ) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    }
    else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  }

  ionViewWillEnter() {
    this.updateDatasets();
  }
}

export class Dataset {
  value: Value;
  points: Point[] = [];
}
