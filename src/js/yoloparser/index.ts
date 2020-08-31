import { Info } from '../types/yolo';

export default class {
  yolo: any;

  validYolo: boolean;

  constructor(yolo: any) {
    this.yolo = yolo;

    this.validYolo = this.isValid();
  }

  isValid(): true {
    // Check info block
    if (!this.yolo.info) {
      throw Error('No info block');
    }

    // Title is required
    if (!this.yolo.info.title || this.yolo.info.title.len < 1) {
      if (!this.yolo.info) {
        throw Error('No title');
      }
    }

    return true;
  }

  getInfo(): Info {
    return {
      title: this.yolo.info.title,
      description: this.yolo.info.description,
    };
  }
}
