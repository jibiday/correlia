import {Injectable} from '@angular/core';

@Injectable()
export class DatasetService {
  datasets = [{
    label: 'pain',
    data: [],
    backgroundColor: [
      'rgba(255, 99, 132, 0.8)'
      ],
    borderColor: [
      'rgba(255,99,132,0.8)'
      ],
    fill: false,
    borderWidth: 2,
    yAxisID: 'intensity'
  },
    {
      label: 'stress',
      data: [],
      backgroundColor: [
        'rgba(0, 0, 132, 0.8)'
        ],
      borderColor: [
        'rgba(0, 0, 132, 0.8)'
        ],
      fill: false,
      borderWidth: 2,
      yAxisID: 'intensity'
    },
    {
      label: 'mood',
      data: [],
      backgroundColor: [
        '#F9C901'
        ],
      borderColor: [
        '#F9C901'
        ],
      fill: false,
      borderWidth: 2,
      yAxisID: 'intensity'
    },
    {
      label: 'start sleep',
      data: [],
      backgroundColor: [
        'rgba(9,9,9,0.2)'
        ],
      borderColor: [
        'rgba(9,9,9,0.2)'
        ],
      fill: 4,
      borderWidth: 2,
      yAxisID: 'intensity'
    },
    {
      label: 'wake',
      data: [],
      backgroundColor: [
        'rgba(9,9,9,0.2)'
        ],
      borderColor: [
        'rgba(9,9,9,0.2)'
        ],
      fill: false,
      borderWidth: 2,
      yAxisID: 'intensity'
    },
    {
      label: 'dosage',
      data: [],
      backgroundColor: [
        '#32db64'
        ],
      borderColor: [
        '#32db64'
        ],
      fill: false,
      steppedLine: 'before',
      borderWidth: 2,
      yAxisID: 'dosage'
    }];

  getByIndex(index: number) {
    return this.datasets[index];
  }

  addByIndex(index: number, value: any) {
    this.datasets[index].data.push(value);
    this.datasets[index].data.sort((a, b) => a.x - b.x);
  }

  getAll() {
    return this.datasets;
  }
}
