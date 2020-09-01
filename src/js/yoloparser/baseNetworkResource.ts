import { Network, Subnet } from '../types/yolo/index';
import { getBinaryNotationFromCidr, calculateAddressFromBinary } from './utils';

export default class {
  // Human readable name for the network
  name: string;

  // A description of what the network is for
  description: string;

  // CIDR notation for network
  cidr: string;

  // Network mask notation for network
  netmask: string;

  constructor(network: Network | Subnet) {
    this.name = network.name;
    this.description = network.description ? network.description : '';
    this.cidr = network.cidr;
    this.netmask = this.getMask();
  }

  getMask() {
    // Convert cider to binary
    const binaryNotation = getBinaryNotationFromCidr(this.cidr);

    // Calculate Address from resulting binary
    return calculateAddressFromBinary(binaryNotation);
  }
}
