import BaseNetworkResource from './baseNetworkResource';
import { Subnet } from '../types/yolo';
import { calculateAddressFromBinary, getBinaryNotationFromCidr, calculateAddressBits } from './utils';

export default class extends BaseNetworkResource {
  availableIPs: number;

  // The broadcast address for this subnet
  broadcast: string;

  // The network address for this subnet
  networkAddress: string;

  constructor(subnet: Subnet) {
    super(subnet);

    this.availableIPs = this.getAvailableIPs();
    this.broadcast = this.getBroadcast();
    this.networkAddress = this.getNetworkAddress();
  }

  getAvailableIPs(): number {
    // Get total network bits from cidr notation
    const networkBits = parseInt(this.cidr.split('/')[1], 10);

    return (2 ** (32 - networkBits)) - 2;
  }

  getBroadcast(): string {
    // Get wildcard bits
    const wildcardBinaryNotation = getBinaryNotationFromCidr(this.cidr, true);

    // Get address bits
    const addressBinaryNotation = calculateAddressBits(this.cidr);

    // Or wildcardBinaryNotation and addressBinaryNotation together
    const resultBits: boolean[] = [];
    for (let i = 0; i < wildcardBinaryNotation.length; i += 1) {
      resultBits.push(wildcardBinaryNotation[i] || addressBinaryNotation[i]);
    }

    // Convert the result bits to base10 octets
    return calculateAddressFromBinary(resultBits);
  }

  getNetworkAddress(): string {
    // Convert cider to binary
    const binaryNotation = getBinaryNotationFromCidr(this.cidr);

    // Convert address to binary
    const addressBinaryNotation = calculateAddressBits(this.cidr);

     // And binaryNotation and addressBinaryNotation together
    const resultBits: boolean[] = [];
    for (let i = 0; i < binaryNotation.length; i += 1) {
      resultBits.push(binaryNotation[i] && addressBinaryNotation[i]);
    }

    return calculateAddressFromBinary(resultBits);
  }
}
