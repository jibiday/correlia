import {Component, OnInit} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import * as moment from 'moment';
import {NoteProvider} from '../../providers/note/note';
import {PointProvider} from '../../providers/point/point';
import {ValueProvider} from '../../providers/value/value';
import {Note, Point, Value} from '../../domain/Symptom';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage implements OnInit{

  values: Value[] = [];
  selectedDate = moment().format('YYYY-MM-DDTHH:mmZ');

  constructor(public navCtrl: NavController,
              private toastCtrl: ToastController,
              private noteProvider: NoteProvider,
              private pointProvider: PointProvider,
              private valueProvider: ValueProvider) {
  }

  ngOnInit(): void {
    this.valueProvider.getAll().then(values => {
      this.values = values;
    })
  }

  ionViewWillEnter() {
    this.selectedDate = moment().format('YYYY-MM-DDTHH:mmZ');
    this.valueProvider.getAll().then(values => {
      this.values = this.values.concat(values.filter(newVal => !this.values.find(v => v.id === newVal.id)));
      this.values = this.values.filter(deletedVal => values.find(v => v.id === deletedVal.id));
    })
  }

  add() {
    let wasAdded = false;
    let date = moment(this.selectedDate).toDate().valueOf();
    let note = new Note(date);

    this.values.forEach(value => {
      if (!isNaN(value.tempIntensity)) {
        let point = new Point(date, value.tempIntensity, value.id);
        this.pointProvider.save(point);
        wasAdded = true;
        note.points.push(point);
        value.tempIntensity = null;
      }
    });

    if (wasAdded) {
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
