import { Host } from '../types/yolo';

export default class {
  // Human readable name for the network
  name: string;

  // A description of what the network is for
  description: string;

  hostname: string;

  ipaddress: string;

  subnet: string;

  os: string;

  constructor(host: Host) {
    this.name = host.name;
    this.description = host.description ? host.description : '';
    this.hostname = host.hostname;
    this.ipaddress = host.ip;
    this.subnet = host.subnet;
    this.os = host.os;
  }
}
