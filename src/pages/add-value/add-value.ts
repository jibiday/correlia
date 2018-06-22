import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {Range, Value} from '../../domain/Symptom';
import {ValueProvider} from '../../providers/value/value';

@Component({
  selector: 'page-add-value',
  templateUrl: 'add-value.html'
})
export class AddValuePage {

  name: string;
  color: string = '#0af';
  min = 0;
  max = 10;
  range = Range.intensity;
  ranges = Range.all();
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController,
              private valueProvider: ValueProvider) {
  }

  ionViewDidLoad() {
  }

  save() {
    let value = new Value();
    value.id = new Date().valueOf();
    value.name = this.name;
    value.color = this.color;
    value.range = this.range;
    this.valueProvider.save(value);
    let toast = this.toastCtrl.create({
      message: 'Value was saved successfully',
      duration: 1500,
      position: 'top'
    });
    toast.present();
    this.navCtrl.pop();
  }
}
