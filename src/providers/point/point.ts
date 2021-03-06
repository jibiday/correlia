import {Injectable} from '@angular/core';
import {Point} from '../../domain/Symptom';
import {Storage} from '@ionic/storage';

@Injectable()
export class PointProvider {
  private points: Point[] = [];

  constructor(private storage: Storage) {
    this.storage.get('points').then(points => {
      this.points = points !== null ? points : [];
    })
  }

  save(point: Point) {
    this.points.push(point);
    this.storage.set('points', this.points);
  }

  getAll() {
    return this.storage.get('points').then((points: Point[]) => {
      this.points = points !== null ? points : [];
      this.points.sort((a, b) => a.millis - b.millis);
      this.points = this.points.map(point => {
        let res = new Point(point.millis, point.y, point.valueId);
        res.millisEnd = point.millisEnd;
        return res;
      });
      return [...this.points];
    });
  }
}
