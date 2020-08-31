import { Info } from '../types/yolo';

export default class {
  yolo: any;

  constructor(yolo: any) {
    this.yolo = yolo;
  }

  getInfo(): Info {
    return {
      title: this.yolo.info.title,
      description: this.yolo.info.description,
    };
  }
}
