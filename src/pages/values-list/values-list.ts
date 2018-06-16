import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AddValuePage} from '../add-value/add-value';
import {ValueProvider} from '../../providers/value/value';
import {Value} from '../../domain/Symptom';

@Component({
  selector: 'page-values-list',
  templateUrl: 'values-list.html',
})
export class ValuesListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private valueProvider: ValueProvider) {
  }

  values: Value[] = [];

  ionViewWillEnter() {
    this.valueProvider.getAll().then(values => {
      this.values = values;
    })
  }

  addValue() {
    this.navCtrl.push(AddValuePage);
  }
}
