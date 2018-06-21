import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {AddValuePage} from '../add-value/add-value';
import {ValueProvider} from '../../providers/value/value';
import {Value} from '../../domain/Symptom';

@Component({
  selector: 'page-values-list',
  templateUrl: 'values-list.html',
})
export class ValuesListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController,
              private valueProvider: ValueProvider) {
  }

  values: Value[] = [];

  ionViewWillEnter() {
    this.updateList();
  }

  addValue() {
    this.navCtrl.push(AddValuePage);
  }

  remove(value: Value) {
    if (confirm('Rilie?')) {
      let tempName = value.name;
      this.valueProvider.remove(value.id).then(() => {
        this.updateList();
        let toast = this.toastCtrl.create({
          message: `Value ${tempName} was successfully deleted`,
          duration: 1500,
          position: 'top'
        });
        toast.present();
      });
    }
  }

  updateList() {
    this.valueProvider.getAll().then(values => {
      this.values = values;
    })
  }
}
