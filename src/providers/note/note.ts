import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";
import {Note} from "../../domain/Symptom";

@Injectable()
export class NoteProvider {
  private notes: Note[] = [];

  constructor(private storage: Storage) {
    this.storage.get('notes').then(notes => {
      this.notes = notes !== null ? notes : [];
    })
  }

  save(value: Note) {
    this.notes.push(value);
    this.storage.set('notes', this.notes);
  }

  getAll() {
    return this.storage.get('notes').then((notes: Note[]) => {
      this.notes = notes !== null ? notes : [];
      return [...this.notes];
    });
  }

}
