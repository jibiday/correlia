import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AddValuePage} from "../add-value/add-value";

@Component({
  selector: 'page-values-list',
  templateUrl: 'values-list.html',
})
export class ValuesListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValuesListPage');
  }

  addValue() {
    this.navCtrl.push(AddValuePage);
  }
}
