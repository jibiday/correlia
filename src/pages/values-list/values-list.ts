import {Component} from "@angular/core";
import {NavController, NavParams, ToastController} from "ionic-angular";
import {AddValuePage} from "../add-value/add-value";
import {ValueProvider} from "../../providers/value/valueProvider";
import {Value, ValueType} from "../../domain/Symptom";
import {AddEventOrIntervalPage} from "../add-event-or-interval/add-event-or-interval";

@Component({
  selector: 'page-values-list',
  templateUrl: 'values-list.html',
})
export class ValuesListPage {
  ValueType = ValueType;

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

  addEventOrInterval() {
    this.navCtrl.push(AddEventOrIntervalPage);
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

  edit(value: Value) {
    if (value.type === ValueType.intensity) {
      this.navCtrl.push(AddValuePage, {value});
    }
  }
}
