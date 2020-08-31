import { Network, Subnet } from '../types/yolo/index';

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
    // Get total network bits from cidr notation
    const networkBits = parseInt(this.cidr.split('/')[1], 10);

    // Convert cider to binary
    const binaryNotation: boolean[] = new Array(networkBits)
      .fill(true)
      .concat(
        new Array(32 - networkBits)
          .fill(false),
      );

    // arry we will join with "." later
    const subnetMask = [];

    // Split binary into four parts
    for (let i = 0; i < 4; i += 1) {
      // Get bits from this octet and reverse for base 2
      const thisOctet = binaryNotation.splice(0, 8).reverse();

      // Total of 255 for this octet
      let total: number = 0;

      // This column
      let col = 1;
      for (let j = 0; j < thisOctet.length; j += 1) {
        total = thisOctet[j] ? total + col : total;

        // Next col will be this col plus itself
        // Base 2
        col += col;
      }
      subnetMask.push(total);
    }

    // Join subnetMask's four elements by "."
    return subnetMask.join('.');
  }
}
