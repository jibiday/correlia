import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import * as moment from 'moment';
import {NoteProvider} from "../../providers/note/note";
import {PointProvider} from "../../providers/point/point";
import {ValueProvider} from "../../providers/value/value";
import {Note, Point, Value} from "../../domain/Symptom";

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  values: Value[];
  selectedDate = moment().format('YYYY-MM-DDTHH:mm');

  constructor(public navCtrl: NavController,
              private toastCtrl: ToastController,
              private noteProvider: NoteProvider,
              private pointProvider: PointProvider,
              private valueProvider: ValueProvider) {
  }

  ionViewWillEnter() {
    this.selectedDate = moment().format('YYYY-MM-DDTHH:mm');
    this.valueProvider.getAll().then(values => {
      this.values = values;
    })
  }

  add() {
    let wasAdded = false;
    let date = moment(this.selectedDate).toDate();
    let note = new Note(date);

    this.values.forEach(value => {
      if (!isNaN(value.tempIntensity)) {
        let point = new Point(date, value.tempIntensity, value.id);
        this.pointProvider.save(point);
        wasAdded = true;
        note.points.push(point);
      }
    });

    if (wasAdded) {
      console.log(note);
      this.noteProvider.save(note);
      let toast = this.toastCtrl.create({
        message: 'Note was added successfully',
        duration: 1500,
        position: 'top'
      });
      toast.present();
    }
  }
}
