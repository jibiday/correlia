import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as Chart from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) {

  }

  ctx;
  myChart;

  selectedDate = moment().format('YYYY-MM-DD');
  selectedPain: number;
  selectedStress: number;
  selectedDose: number;

  ngOnInit(): void {
    this.ctx = "myChart";
    this.myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'pain',
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)'
          ],
          borderColor: [
            'rgba(255,99,132,0.8)'
          ],
          fill: false,
          borderWidth: 1,
          yAxisID: 'intensity'
        },
          {
            label: 'stress',
            backgroundColor: [
              'rgba(0, 0, 132, 0.8)'
            ],
            borderColor: [
              'rgba(0, 0, 132, 0.8)'
            ],
            fill: false,
            borderWidth: 1,
            yAxisID: 'intensity'
          },
          {
            label: 'dosage',
            backgroundColor: [
              'rgba(0, 255, 0, 0.8)'
            ],
            borderColor: [
              'rgba(0, 255, 0, 0.8)'
            ],
            fill: false,
            steppedLine: 'before',
            borderWidth: 1,
            yAxisID: 'dosage'
          }]
      },
      options: {
        tooltips: {
          callbacks: {
            title: (tooltips, data) => {
              return moment(data['x']).format('D MMMM YYYY');
            }
          }
        },
        scales: {
          xAxes: [{
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
              scaleLabel: {
                display: true,
                labelString: 'intensity'
              }
            },
            {
              id: 'dosage',
              position: 'right',
              scaleLabel: {
                display: true,
                labelString: 'dosage'
              }
            }
          ]
        }
      }
    });
  }

  add() {
    let date = moment(this.selectedDate);
    if (!isNaN(this.selectedPain)) {
      this.myChart.data.datasets[0].data.push({x: date, y: this.selectedPain});
    }
    if (!isNaN(this.selectedStress)) {
      this.myChart.data.datasets[1].data.push({x: date, y: this.selectedStress});
    }
    if (!isNaN(this.selectedDose)) {
      this.myChart.data.datasets[2].data.push({x: date, y: this.selectedDose});
    }
    this.myChart.data.datasets[0].data.sort((a, b) => a.x - b.x);
    this.myChart.data.datasets[1].data.sort((a, b) => a.x - b.x);
    this.myChart.update();
  }
}
