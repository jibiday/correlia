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
  color: string;
  icon: string;
  type: ValueType;
  tempIntensity?: number;
  range: Range;
}

export enum ValueType {
  intensity = 'Intensity',
  event = 'Event',
  interval = 'Interval'
}

export class Point {
  millis: number;
  y: number;
  value: Value;
  valueId: number;

  constructor(millis: number, y: number, valueId: number) {
    this.millis = millis;
    this.y = y;
    this.valueId = valueId;
  }

  get x() {
    return new Date(this.millis);
  }
}

export class Range {
  name: string;
  min: number;
  max: number;

  public static intensity = new Range('intensity', 0, 10);
  public static negative = new Range('negative', -5, 5);
  public static natural = new Range('natural', 0, 1000000);
  public static event = new Range('event', 1, 2);

  static all() {
    return [Range.intensity, Range.negative, Range.natural];
  }

  constructor(name: string, min: number, max: number) {
    this.name = name;
    this.min = min;
    this.max = max;
  }
}
