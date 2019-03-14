import {Component, OnInit} from '@angular/core';
import {NavController, Platform, ToastController} from 'ionic-angular';
import * as moment from 'moment';
import {NoteProvider} from '../../providers/note/note';
import {PointProvider} from '../../providers/point/point';
import {ValueProvider} from '../../providers/value/valueProvider';
import {Note, Point, Value, ValueType} from '../../domain/Symptom';
import {AppMinimize} from '@ionic-native/app-minimize/ngx';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage implements OnInit{

  ValueType = ValueType;
  now = moment().format('YYYY-MM-DDTHH:mmZ');
  values: Value[] = [];
  grouped: any = {};
  selectedDate = moment().format('YYYY-MM-DDTHH:mmZ');

  constructor(public navCtrl: NavController,
              private toastCtrl: ToastController,
              private noteProvider: NoteProvider,
              private pointProvider: PointProvider,
              private platform: Platform,
              private appMinimize: AppMinimize,
              private valueProvider: ValueProvider) {
  }

  ngOnInit(): void {
    this.platform.registerBackButtonAction(() => {
      this.appMinimize.minimize();
    });
    this.valueProvider.getAll().then(values => {
      this.values = values;
    })
  }

  ionViewWillEnter() {
    this.selectedDate = moment().format('YYYY-MM-DDTHH:mmZ');
    this.valueProvider.getAll().then(values => {
      this.values = values;
      this.grouped.intensities = this.values.filter(val => val.type == ValueType.intensity);
      this.grouped.events = this.values.filter(val => val.type == ValueType.event);
      this.grouped.intervals = this.values.filter(val => val.type == ValueType.interval);
    })
  }

  add() {
    let wasAdded = false;
    let date = moment(this.selectedDate).toDate().valueOf();
    let note = new Note(date);

    this.values.forEach(value => {
      if (value.type === ValueType.intensity || value.type === ValueType.event) {
        if (!isNaN(value.tempIntensity) && value.tempIntensity != null) {
          let point = new Point(date, value.tempIntensity, value.id);
          this.pointProvider.save(point);
          wasAdded = true;
          note.points.push(point);
          value.tempIntensity = null;
        }
      }
      if (value.type === ValueType.interval) {
        if (value.tempIntervalStart && value.tempIntervalEnd) {
          let point = new Point(moment(value.tempIntervalStart).toDate().valueOf(), 1, value.id);
          point.millisEnd = moment(value.tempIntervalEnd).toDate().valueOf();
          this.pointProvider.save(point);
          wasAdded = true;
          note.points.push(point);
          value.tempIntervalStart = null;
          value.tempIntervalEnd = null;
        }
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

  toggleEvent(value: Value) {
    value.tempIntensity = value.tempIntensity ? null : 1;
  }
}
