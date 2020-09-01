import { Info } from '../types/yolo';
import Network from './network';
import Host from './host';
import OS from './os';

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
      networks.push(new Network({
        ...this.yolo.network[networkNames[i]],
        name: networkNames[i],
      }));
    }

    return networks;
  }

  getHosts(): Host[] {
    const hosts: Host[] = [];

    const hostNames = Object.keys(this.yolo.host);
    for (let i = 0; i < hostNames.length; i += 1) {
      hosts.push(new Host({
        ...this.yolo.host[hostNames[i]],
        name: hostNames[i],
      }));
    }

    return hosts;
  }

  getOS(): OS[] {
    const osList: OS[] = [];

    const osNames = Object.keys(this.yolo.os);
    for (let i = 0; i < osNames.length; i += 1) {
      osList.push(new OS({
        ...this.yolo.os[osNames[i]],
        name: osNames[i],
      }));
    }

    return osList;
  }
}
