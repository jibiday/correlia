export class Note {
  id: number;
  date: number;
  points: Point[] = [];
  comment: string;

  constructor(date: number) {
    this.date = date;
  }
}

export class Value {
  id: number;
  name: string;
  min: number = 0;
  max: number = 10;
  color: string;
  icon: string;
  chartType: string = 'line';
  tempIntensity?: number;
}

export class Point {
  x: number;
  y: number;
  value: Value;
  valueId: number;

  constructor(x: number, y: number, valueId: number) {
    this.x = x;
    this.y = y;
    this.valueId = valueId;
  }
}
