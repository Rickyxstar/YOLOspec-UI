import { Info } from '../types/yolo';
import Network from './network';

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

  getNetworks(): Network[] {
    const networks: Network[] = [];

    const networkNames = Object.keys(this.yolo.network);
    for (let i = 0; i < networkNames.length; i += 1) {
      networks.push(this.yolo.network[networkNames[i]]);
    }

    return networks;
  }
}
