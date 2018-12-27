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
  isFilled = false;
  editValue: Value;
  icon = '';
  toggled = false;
  isEditMode = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController,
              private valueProvider: ValueProvider) {
    if (this.navParams.get('value')) {

      this.isEditMode = true;
      this.editValue = this.navParams.get('value');
      this.name = this.editValue.name;
      this.color = this.editValue.color;
      this.isStepped = this.editValue.isStepped;
      this.isFilled = this.editValue.isFilled;
      this.icon = this.editValue.icon;
    }
  }

  ionViewDidLoad() {
  }

  handleIconSelection(event) {
    this.icon = event.char;
    this.toggled = false;
  }

  removeValue() {
    if(confirm('Really?')) {
      this.valueProvider.remove(this.editValue.id).then(() => {
        let toast = this.toastCtrl.create({
          message: 'Value was removed successfully',
          duration: 1500,
          position: 'top'
        });
        toast.present();
        this.navCtrl.pop();
      });
    }
  }

  save() {
    let value = this.editValue || new Value();
    value.id = this.editValue ? this.editValue.id : new Date().getTime();
    value.name = this.name;
    value.color = this.color;
    value.range = this.range;
    value.type = ValueType.intensity;
    value.isStepped = this.isStepped;
    value.isFilled = this.isFilled;
    value.icon = this.icon;
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
