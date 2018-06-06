import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {DatasetService} from '../../services/datasetService';
import * as moment from 'moment';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  selectedDate = moment().format('YYYY-MM-DD');
  selectedPain: number;
  selectedStress: number;
  selectedDose: number;

  constructor(public navCtrl: NavController,
              private toastCtrl: ToastController,
              private datasetService: DatasetService) {
  }

  add() {
    let wasAdded = false;
    let date = moment(this.selectedDate);
    if (!isNaN(this.selectedPain)) {
      this.datasetService.addByIndex(0, {x: date, y: this.selectedPain});
      wasAdded = true;
    }
    if (!isNaN(this.selectedStress)) {
      this.datasetService.addByIndex(1,{x: date, y: this.selectedStress});
      wasAdded = true;
    }
    if (!isNaN(this.selectedDose)) {
      this.datasetService.addByIndex(2,{x: date, y: this.selectedDose});
      wasAdded = true;
    }

    if (wasAdded) {
      let toast = this.toastCtrl.create({
        message: 'Note was added successfully',
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }
  }
}