import {Component} from "@angular/core";
import {NavController, NavParams, ToastController} from "ionic-angular";
import {Range, Value, ValueType} from "../../domain/Symptom";
import {ValueProvider} from "../../providers/value/valueProvider";

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
  isStepped = false;
  editValue: Value;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController,
              private valueProvider: ValueProvider) {
    if (this.navParams.get('value')) {
      this.editValue = this.navParams.get('value');
      this.name = this.editValue.name;
      this.color = this.editValue.color;
      this.isStepped = this.editValue.isStepped;
    }
  }

  ionViewDidLoad() {
  }

  save() {
    let value = this.editValue || new Value();
    value.id = this.editValue ? this.editValue.id : new Date().valueOf();
    value.name = this.name;
    value.color = this.color;
    value.range = this.range;
    value.type = ValueType.intensity;
    value.isStepped = this.isStepped;
    this.valueProvider.update(value).then(() => {
      let toast = this.toastCtrl.create({
        message: 'Value was saved successfully',
        duration: 1500,
        position: 'top'
      });
      toast.present();
      this.navCtrl.pop();
    });
  }
}
