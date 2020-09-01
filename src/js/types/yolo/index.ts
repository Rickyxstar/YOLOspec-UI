export interface Yolo {
  yolo: string | number
  info: Info
  networks: Network[]
}

export interface Info {
  title: string
  description?: string
}

interface BaseResource {
  name: string
  description?: string
}

export interface Network extends BaseResource {
  cidr: string
  dns: string[]
  gateway: string
  subnets: {
    [x: string]: Subnet
  }
}

export interface Subnet extends BaseResource {
  networkName: string
  cidr: string
  broadcast: string
}

export interface Host extends BaseResource {
  hostname: string
  ip: string
  subnet: string
  os: string
}
