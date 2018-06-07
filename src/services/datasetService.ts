import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage'

@Injectable()
export class DatasetService {

  constructor(private storage: Storage) {
    this.storage.get('datas').then(datas => {
      if(datas) {
        this.datas = datas;
      }
    })
  }

  datas = [[],[],[],[],[],[]];
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

  // getByIndex(index: number) {
  //   return this.storage.get('datas').then(datas => {
  //     return datas[index];
  //   });
  // }

  addByIndex(index: number, value: any) {
    this.datas[index].push(value);
    this.datas[index].sort((a, b) => a.x - b.x);
    this.storage.set('datas', this.datas);
  }

  getAll() {
    return this.storage.get('datas').then(datas => {
      if(datas) {
        [...this.datasets].forEach((dataset, index) => {
          dataset.data = datas[index];
        });
      }
      return [...this.datasets];
    });
  }
}
