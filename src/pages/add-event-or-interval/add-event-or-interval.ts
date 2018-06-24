import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {Range, Value, ValueType} from "../../domain/Symptom";
import {ValueProvider} from "../../providers/value/valueProvider";

@Component({
  selector: 'page-add-event-or-interval',
  templateUrl: 'add-event-or-interval.html',
})
export class AddEventOrIntervalPage {

  type = ValueType.event;
  types = [ValueType.event, ValueType.interval];
  name: string;
  color: string = '#0af';

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
    value.type = this.type;
    value.range = Range.event;
    this.valueProvider.save(value);
    let toast = this.toastCtrl.create({
      message: `${this.type} was saved successfully`,
      duration: 1500,
      position: 'top'
    });
    toast.present();
    this.navCtrl.pop();
  }

}
