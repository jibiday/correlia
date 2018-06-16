import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {Value} from '../../domain/Symptom';
import {ValueProvider} from '../../providers/value/value';

@Component({
  selector: 'page-add-value',
  templateUrl: 'add-value.html'
})
export class AddValuePage {

  name: string;
  color: string = '#00a2ff';
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController,
              private valueProvider: ValueProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddValuePage');
  }

  save() {
    let value = new Value();
    value.id = new Date().valueOf();
    value.name = this.name;
    value.color = this.color;
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
