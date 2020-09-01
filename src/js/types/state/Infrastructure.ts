import { Info } from '../yolo';
import Network from '../../yoloparser/network';
import Host from '../../yoloparser/host';
import OS from '../../yoloparser/os';

export namespace Infrastructure {
  export interface State {
    info: Info
    networks: Network[]
    hosts: Host[]
    os: OS[]
  }

  export namespace Actions {
    export const UPDATE_INFO = 'UPDATE_INFO';
    export const UPDATE_NETWORKS = 'UPDATE_NETWORKS';
    export const UPDATE_HOSTS = 'UPDATE_HOSTS';
    export const UPDATE_OS = 'UPDATE_OS';

    export interface UpdateInfo {
      type: typeof UPDATE_INFO,
      info: Info
    }

    export interface updateNetworks {
      type: typeof UPDATE_NETWORKS,
      networks: Network[]
    }

    export interface updateHosts {
      type: typeof UPDATE_HOSTS,
      hosts: Host[]
    }

    export interface updateOS {
      type: typeof UPDATE_OS,
      os: OS[]
    }

    export type Types = UpdateInfo | updateNetworks | updateHosts| updateOS;
  }
}
