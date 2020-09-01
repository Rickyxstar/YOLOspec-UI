// Takes binary represented as boolean[] and converts it into an ip address
export const calculateAddressFromBinary = (binaryNotation: boolean[]): string => {
  // arry we will join with "." later
  const resultIP = [];

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
    resultIP.push(total);
  }

  // Join subnetMask's four elements by "."
  return resultIP.join('.');
};

// Takes network CIDR and converts the to binary represented by boolean[]
export const getBinaryNotationFromCidr = (cidr: string, invert: boolean = false): boolean[] => {
  const networkBits = parseInt(cidr.split('/')[1], 10);

  return new Array(networkBits)
    .fill(!invert)
    .concat(
      new Array(32 - networkBits)
        .fill(invert),
    );
};

export const calculateAddressBits = (cidr: string): boolean[] => {
  const addressParts = cidr.split('/');
  // Split ip by octet
  const octets = addressParts[0].split('.');

  let binaryNotation: boolean[] = [];

  // Loop through octets and convert each int to base2
  for (let i = 0; i < octets.length; i += 1) {
    const base2 = parseInt(octets[i], 10).toString(2);

    const octetBinary = new Array(8 - base2.length).fill(false);
    for (let j = 0; j < base2.length; j += 1) {
      octetBinary.push(base2[j] === '1');
    }
    binaryNotation = binaryNotation.concat(octetBinary);
  }

  return binaryNotation;
};
