
export class Widget {
  _id: string;
  name: string;
  asset:  Asset[];
  config: Config[];
}

export class Asset {
  _id: string;
  tid: string;
}

export class Config {

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }

  key: string;
  value: string;
}
