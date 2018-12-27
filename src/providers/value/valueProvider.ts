import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";
import {Value} from "../../domain/Symptom";

@Injectable()
export class ValueProvider {
  private values: Value[] = [];

  constructor(private storage: Storage) {
    this.storage.get('values').then(values => {
      this.values = values !== null ? values : [];
    })
  }

  save(value: Value) {
    this.values.push(value);
    this.storage.set('values', this.values);
  }

  update(value: Value) {
    return this.storage.get('values').then(values => {
      let index = values.findIndex(val => val.id === value.id);
      if (index === -1){
        this.save(value)
      } else {
        values[index] = value;
        this.storage.set('values', values);
      }
    })
  }

  getAll() {
    return this.storage.get('values').then((values: Value[]) => {
      this.values = values !== null ? values : [];
      return [...this.values];
    });
  }

  getById(id: number) {
    return this.storage.get('values').then((values) => {
      return [...values].find(v => v.id === id);
    });
  }

  remove(id: number) {
    this.values = this.values.filter(value => value.id !== id);
    return this.storage.set('values', this.values);
  }
}
