import BaseNetworkResource from './baseNetworkResource';
import { Subnet } from '../types/yolo';

export default class extends BaseNetworkResource {
  availableIPs: number;

  constructor(subnet: Subnet) {
    super(subnet);

    this.availableIPs = this.getAvailableIPs();
  }

  getAvailableIPs(): number {
    // Get total network bits from cidr notation
    const networkBits = parseInt(this.cidr.split('/')[1], 10);

    return (2 ** (32 - networkBits)) - 2;
  }
}
