export class Note {
  id: number;
  intensity: number;
  date: string;
  value: Value;
  comment: string;
}

export class Value {
  id: number;
  name: string;
  min: number = 0;
  max: number = 10;
  color: string;
  icon: string;
  chartType: string = 'line';
}

export class Point {

}
