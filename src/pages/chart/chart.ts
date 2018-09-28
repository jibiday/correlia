import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as Chart from 'chart.js';
import 'chartjs-plugin-zoom';
import * as moment from 'moment';
import {PointProvider} from '../../providers/point/point';
import {Point, Value, ValueType} from '../../domain/Symptom';
import {ValueProvider} from '../../providers/value/valueProvider';

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
  chartView = ChartType.overall;
  points: Point[] = [];
  values: Value[] = [];
  datasets: Dataset[] = [];
  segmentButtons = [
    ChartType.overall,
    ChartType.day,
    ChartType.week,
    ChartType.month,
    ChartType.year
  ];

  ngOnInit() {
    Chart.defaults.global.elements.point.hitRadius = 5;
    Chart.defaults.global.elements.point.radius = 1;
    this.ctx = 'myChart';
    this.myChart = new Chart(this.ctx, {
      type: 'line',
      options: {
        // @ts-ignore
        pan: {
          // Boolean to enable panning
          enabled: true,

          // Panning directions. Remove the appropriate direction to disable
          // Eg. 'y' would only allow panning in the y direction
          mode: 'x'
        },

        // Container for zoom options
        zoom: {
          // Boolean to enable zooming
          enabled: true,

          // Zooming directions. Remove the appropriate direction to disable
          // Eg. 'y' would only allow zooming in the y direction
          mode: 'x',
        },
        responsive: true,
        maintainAspectRatio: false,
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
              return !legendItem.text.includes('(trend)') && !legendItem.text.includes('(event)') &&
                !legendItem.text.includes('(intervalTop)') && !legendItem.text.includes('(intervalBottom)');
            },
          },
          onClick: (e, legendItem) => {
            let index = legendItem.datasetIndex;
            let i1 = Math.floor(index / 3) * 3;
            let i2 = i1 + 1;
            let i3 = i1 + 2;
            let ci = this.myChart;
            [ci.getDatasetMeta(i1),
              ci.getDatasetMeta(i2),
              ci.getDatasetMeta(i3)].forEach(function (meta) {
              meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
            });
            ci.update();
          }
        },
        tooltips: {
          mode: 'nearest',
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
              display: true
            },
            type: 'time',
            time: {
              minUnit: 'minute'
            },
            ticks: {
              display: true,
              maxRotation: 90,
              minRotation: 90
            }
          }],
          yAxes: [
            {
              id: 'intensity',
              position: 'left',
              gridLines: {
                display: false,
                drawTicks: false
              },
              scaleLabel: {
                display: false,
                labelString: 'intensity'
              },
              ticks: {
                display: false,
                // beginAtZero: true,
                // mirror: true,
                // padding: -5
              }
            },
            {
              id: 'negative',
              position: 'left',
              gridLines: {
                display: false,
                drawTicks: false
              },
              scaleLabel: {
                display: false,
                labelString: 'negative'
              },
              ticks: {
                display: false
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
              id: 'event',
              position: 'left',
              gridLines: {
                display: false
              },
              scaleLabel: {
                display: false,
                fontSize: 9,
                labelString: 'event'
              },
              ticks: {
                display: false
              }
            },
            {
              id: 'zero',
              position: 'left',
              gridLines: {
                display: true
              },
              scaleLabel: {
                display: false,
                fontSize: 9,
              },
              ticks: {
                display: true
              }
            }
          ]
        },

      }
    });
    this.myChart.options.scales.yAxes[0].ticks.suggestedMin = -10;
    this.myChart.options.scales.yAxes[0].ticks.suggestedMax = 10;
    this.myChart.options.scales.yAxes[0].ticks.stepSize = 1;
    this.myChart.options.scales.yAxes[1].ticks.suggestedMin = -10;
    this.myChart.options.scales.yAxes[1].ticks.suggestedMax = 10;
    this.myChart.options.scales.yAxes[1].ticks.stepSize = 1;
    this.myChart.options.scales.yAxes[3].ticks.suggestedMin = 1;
    this.myChart.options.scales.yAxes[3].ticks.suggestedMax = 2;
    this.myChart.options.scales.yAxes[4].ticks.suggestedMin = -10;
    this.myChart.options.scales.yAxes[4].ticks.suggestedMax = 10;
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
        borderWidth: 1,
        yAxisID: dataset.value.range.name
      })
    });

    // this.drawPointLabels();

  }

  updateDatasets() {
    let unit = null;
    let displayFormat = {
      millisecond: 'hh:mm',
      second: 'hh:mm',
      minute: 'hh:mm',
      hour: 'hh:mm',
      day: 'MMM D',
      week: 'll',
      month: 'MMM YYYY',
      year: 'YYYY'
    };
    this.datasets = [];
    this.pointProvider.getAll().then(points => {
      this.points = points;
      this.valueProvider.getAll().then(values => {
        this.values = values;
        this.points.forEach(point => {
          let dataset = this.datasets.find(dataset => dataset.value.id === point.valueId);
          if (!dataset) {
            dataset = new Dataset('points');
            let value = this.values.find(val => val.id === point.valueId);
            if (value) {
              dataset.value = value;
              this.datasets.push(dataset);
            }
          }
          switch (this.chartView.value) {
            case ChartType.overall.value:
              break;
            case ChartType.day.value:
              point.millis = moment({hour: moment(point.x).hour(), minute: moment(point.x).minute()}).valueOf();
              unit = 'hour';
              displayFormat['hour'] = 'HH:mm';
              break;
            case ChartType.week.value:
              point.millis = moment({
                day: moment(point.x).day(),
                hour: moment(point.x).hour(),
                minute: moment(point.x).minute()
              }).valueOf();
              unit = 'day';
              displayFormat['day'] = 'ddd';
              break;
            case ChartType.month.value:
              point.millis = moment({day: moment(point.x).date()}).valueOf();
              unit = 'day';
              displayFormat['day'] = 'D';
              break;
            case ChartType.year.value:
              point.millis = moment({
                month: moment(point.x).month(),
                day: moment(point.x).date(),
                hour: moment(point.x).hour(),
                minute: moment(point.x).minute()
              }).valueOf();
              unit = 'month';
              displayFormat['month'] = 'MMM';
              break;
          }
          dataset.points.push(point);
        });
        this.myChart.data.datasets = [];
        this.datasets.forEach(dataset => {
          dataset.points.sort((a, b) => a.millis - b.millis);
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
            pointRadius: dataset.value.type === ValueType.event || dataset.value.type === ValueType.interval ? 0 : 2,
            yAxisID: dataset.value.range.name
          })
        });
        this.createMovingAverageDatasets();
        this.drawEvents();
        if (this.chartView === ChartType.overall) {
          this.drawIntervals();
        }
        this.myChart.options.scales.xAxes[0].time.unit = unit;
        if (this.chartView.value !== ChartType.overall.value) {
          this.myChart.options.scales.xAxes[0].time.stepSize = 1;
        } else {
          this.myChart.options.scales.xAxes[0].time.stepSize = null;
        }
        this.myChart.options.scales.xAxes[0].time.displayFormats = displayFormat;
        this.myChart.update();
      });
    });
  }

  createMovingAverageDatasets() {
    if (this.chartView === ChartType.month) {
      this.datasets.filter(dataset => dataset.value.type === ValueType.intensity).forEach(dataset => {
        let averagePoints = new Map<number, number[]>();
        dataset.points.forEach(point => {
          let dailyPoints = averagePoints.get(point.x.getDate());
          if (dailyPoints) {
            dailyPoints.push(point.y);
          } else {
            averagePoints.set(point.x.getDate(), [point.y]);
          }
        });
        dataset.points = [];
        averagePoints.forEach((v, k) => {
          dataset.points.push(new Point(moment({date: k}).valueOf(), v.reduce((a, b) => a + b, 0) / v.length, dataset.value.id));
        });
        dataset.points.sort((a, b) => a.millis - b.millis);
      })
    }
    this.datasets.filter(dataset => dataset.value.type === ValueType.intensity).forEach(dataset => {
      let mADataset = new Dataset('MA');
      dataset.points.forEach((point, index, array) => {
        mADataset.value = dataset.value;
        if (index !== 0) {
          let mAMiddlePoint = new Point(point.millis, point.y, point.valueId);
          mAMiddlePoint.y = (array[index - 1].y + array[index].y) / 2;
          mAMiddlePoint.millis = (array[index - 1].millis + array[index].millis) / 2;
          mADataset.points.push(mAMiddlePoint);
        }
        if (index === 0 || index === array.length - 1) {
          let mAPoint = new Point(point.millis, point.y, point.valueId);
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
          this.hexToRgba(mADataset.value.color, 0.5)
        ],
        pointRadius: 0,
        fill: dataset.value.range.name === 'negative',
        borderWidth: 1,
        yAxisID: dataset.value.range.name
      });
      // fake third one
      this.myChart.data.datasets.push({
        label: `${mADataset.value.name} (trend)2`,
        data: mADataset.points,
        backgroundColor: [
          this.hexToRgba(mADataset.value.color, 0.3)
        ],
        borderColor: [
          this.hexToRgba(mADataset.value.color, 0.5)
        ],
        pointRadius: 0,
        fill: dataset.value.range.name === 'negative',
        borderWidth: 1,
        yAxisID: dataset.value.range.name
      });
    });
    this.myChart.data.datasets.sort((d1, d2) => d1.label < d2.label ? -1 : 1);
    this.myChart.update();
  }

  drawEvents() {
    let pointDatasets = this.datasets.filter(dataset => dataset.value.type === ValueType.event);
    pointDatasets.forEach((dataset, datasetIndex) => {
      let eventDataset = new Dataset('Events');
      dataset.points.forEach((point, index, array) => {
        eventDataset.value = dataset.value;
        let evPoint = new Point(point.millis, point.y + datasetIndex / pointDatasets.length, point.valueId);
        eventDataset.points.push(evPoint);
        evPoint = new Point(point.millis, point.y + (datasetIndex + 1) / pointDatasets.length, point.valueId);
        eventDataset.points.push(evPoint);
        eventDataset.points.push(new Point(point.millis, null, point.valueId));
      });
      this.myChart.data.datasets.push({
        label: `${eventDataset.value.name} (event)`,
        data: eventDataset.points,
        backgroundColor: [
          this.hexToRgba(eventDataset.value.color, 0.3)
        ],
        borderColor: [
          this.hexToRgba(eventDataset.value.color, 0.8)
        ],
        pointRadius: 0,
        yAxisID: dataset.value.range.name
      });

      // fake third one
      this.myChart.data.datasets.push({
        label: `${eventDataset.value.name} (event)2`,
        data: eventDataset.points,
        backgroundColor: [
          this.hexToRgba(eventDataset.value.color, 0.3)
        ],
        borderColor: [
          this.hexToRgba(eventDataset.value.color, 0.8)
        ],
        pointRadius: 0,
        yAxisID: dataset.value.range.name
      });
    });
    this.myChart.data.datasets.sort((d1, d2) => d1.label < d2.label ? -1 : 1);
    this.myChart.update();
  }

  drawIntervals() {
    let intervalDatasets = this.datasets.filter(dataset => dataset.value.type === ValueType.interval);
    intervalDatasets.forEach((dataset, datasetIndex) => {
      let intervalTopDataset = new Dataset('Intervals');
      let intervalBottomDataset = new Dataset('Intervals');
      dataset.points.forEach((point, index, array) => {
        intervalBottomDataset.value = dataset.value;
        intervalTopDataset.value = dataset.value;
        let intervalBottomPoint = new Point(point.millis, point.y + datasetIndex / intervalDatasets.length, point.valueId);
        intervalBottomDataset.points.push(intervalBottomPoint);
        intervalBottomPoint = new Point(point.millisEnd, point.y + datasetIndex / intervalDatasets.length, point.valueId);
        intervalBottomDataset.points.push(intervalBottomPoint);
        intervalBottomDataset.points.push(new Point(point.millisEnd, null, point.valueId));

        let intervalTopPoint = new Point(point.millis, point.y + (datasetIndex + 1) / intervalDatasets.length, point.valueId);
        intervalTopDataset.points.push(intervalTopPoint);
        intervalTopPoint = new Point(point.millisEnd, point.y + (datasetIndex + 1) / intervalDatasets.length, point.valueId);
        intervalTopDataset.points.push(intervalTopPoint);
        intervalTopDataset.points.push(new Point(point.millisEnd, null, point.valueId));
      });
      this.myChart.data.datasets.push({
        label: `${intervalTopDataset.value.name} (intervalTop)`,
        data: intervalTopDataset.points,
        backgroundColor: [
          this.hexToRgba(intervalTopDataset.value.color, 0.3)
        ],
        borderColor: [
          this.hexToRgba(intervalTopDataset.value.color, 0.8)
        ],
        pointRadius: 0,
        borderWidth: 0.1,
        fill: '-1',
        yAxisID: dataset.value.range.name
      });
      this.myChart.data.datasets.push({
        label: `${intervalBottomDataset.value.name} (intervalBottom)`,
        data: intervalBottomDataset.points,
        backgroundColor: [
          this.hexToRgba(intervalBottomDataset.value.color, 0.3)
        ],
        borderColor: [
          this.hexToRgba(intervalBottomDataset.value.color, 0.8)
        ],
        borderWidth: 0.1,
        pointRadius: 0,
        fill: '+1',
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

  hexToRgba(hex, alpha) {
    hex = hex.replace('#', '');
    let r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
    let g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
    let b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
    if (alpha) {
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
  type: string;
  value: Value;
  points: Point[] = [];

  constructor(type: string) {
    this.type = type;
  }
}

export class ChartType {
  value: string;
  title: string;

  public static overall = new ChartType('overall', 'Overall');
  public static day = new ChartType('day', 'Average per day');
  public static week = new ChartType('week', 'Average per week');
  public static month = new ChartType('month', 'Average per month');
  public static year = new ChartType('year', 'Average per year');

  constructor(value: string, title: string) {
    this.value = value;
    this.title = title;
  }
}
