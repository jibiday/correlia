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
    borderWidth: 1,
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
      borderWidth: 1,
      yAxisID: 'intensity'
    },
    {
      label: 'dosage',
      data: [],
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
