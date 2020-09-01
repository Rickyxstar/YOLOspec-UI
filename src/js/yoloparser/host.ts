import { Host } from '../types/yolo';

export default class {
  hostname: string;

  ipaddress: string;

  subnet: string;

  constructor(host: Host) {
    this.hostname = host.hostname;
    this.ipaddress = host.ip;
    this.subnet = host.subnet;
  }
}
