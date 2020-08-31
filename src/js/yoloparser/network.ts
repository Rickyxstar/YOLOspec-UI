import { Network } from '../types/yolo/index';
import BaseNetworkResource from './baseNetworkResource';

export default class extends BaseNetworkResource {
  // List of DNS ips
  dns: string[];

  // Gateway network
  gateway: string;

  constructor(network: Network) {
    super(network);

    this.dns = network.dns;
    this.gateway = network.gateway;
  }
}
