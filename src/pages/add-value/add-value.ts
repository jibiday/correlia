import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-add-value',
  templateUrl: 'add-value.html',
})
export class AddValuePage {

  color: string;
  toggle: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddValuePage');
  }

  toggleColor() {
    this.toggle=!this.toggle;
  }
}
