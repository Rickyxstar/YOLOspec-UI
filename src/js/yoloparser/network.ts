import { Network } from '../types/yolo/index';
import BaseNetworkResource from './baseNetworkResource';
import Subnet from './subnet';

export default class extends BaseNetworkResource {
  // List of DNS ips
  dns: string[];

  // Gateway network
  gateway: string;

  // Subnets
  subnets: Subnet[];

  constructor(network: Network) {
    super(network);

    this.dns = network.dns;
    this.gateway = network.gateway;

    // Get Subnets
    const { subnets } = network;
    const resultSubnets: Subnet[] = [];
    const subnetName = Object.keys(subnets);
    for (let i = 0; i < subnetName.length; i += 1) {
      resultSubnets.push(new Subnet({
        ...subnets[subnetName[i]],
        name: subnetName[i],
      }));
    }
    this.subnets = resultSubnets;
  }
}
