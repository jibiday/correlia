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
                display: false
              },
              id: 'intensity',
              position: 'left',
              scaleLabel: {
                display: true,
                labelString: 'intensity'
              },
              ticks: {
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
                display: true,
                labelString: 'dosage'
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  ionViewWillEnter() {
    this.myChart.data.datasets = this.datasetService.getAll();
    this.myChart.update();
  }
}
