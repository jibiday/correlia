import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import * as Chart from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController) {

  }

  ctx;
  myChart;

  ngOnInit(): void {
    this.ctx = "myChart";
    this.myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'pain',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,0.2)'
          ],
          fill: false,
          borderWidth: 1
        },
          {
          label: 'stress',
          backgroundColor: [
            'rgba(0, 0, 132, 0.2)'
          ],
          borderColor: [
            'rgba(0, 0, 132, 0.2)'
          ],
            fill: false,
          borderWidth: 1
        },
          {
          label: 'every 10th',
          backgroundColor: [
            'rgba(255, 0, 0, 0.8)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 0.8)'
          ],
            spanGaps: true,
            fill: false,
          borderWidth: 1
        },
          {
          label: 'every 10th',
          backgroundColor: [
            'rgba(0, 0, 255, 0.8)'
          ],
          borderColor: [
            'rgba(0, 0, 255, 0.8)'
          ],
            spanGaps: true,
            fill: false,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }

  i = 0;
  bigRandy = 3;

  add() {
    this.bigRandy += 0.5 - Math.random();
    this.myChart.data.datasets[0].data.push(this.bigRandy + 0.5 - Math.random());
    this.myChart.data.datasets[1].data.push((this.bigRandy + Math.random()) * 2);

    if (this.i % 10 === 0) {
      this.myChart.data.datasets[2].data.push(this.myChart.data.datasets[0].data[this.i]);
      this.myChart.data.datasets[3].data.push(this.myChart.data.datasets[1].data[this.i]);
      this.myChart.data.labels.push(Math.round(this.i / 10));
    } else {
      this.myChart.data.datasets[2].data.push(null);
      this.myChart.data.datasets[3].data.push(null);
      this.myChart.data.labels.push('');
    }
    this.myChart.update();
    this.i++;
  }
}
