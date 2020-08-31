import { Info } from '../yolo';
import Network from '../../yoloparser/network';

export namespace Infrastructure {
  export interface State {
    yaml: string
    info: Info
    networks: Network[]
  }

  export namespace Actions {
    export const UPDATE_YAML = 'UPDATE_YAML';
    export const UPDATE_INFO = 'UPDATE_INFO';
    export const UPDATE_NETWORKS = 'UPDATE_NETWORKS';

    export interface UpdateYAML {
      type: typeof UPDATE_YAML,
      yaml: string
    }

    export interface UpdateInfo {
      type: typeof UPDATE_INFO,
      info: Info
    }

    export interface updateNetworks {
      type: typeof UPDATE_NETWORKS,
      networks: Network[]
    }

    export type Types = UpdateYAML | UpdateInfo | updateNetworks;
  }
}
