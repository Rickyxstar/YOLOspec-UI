import { Infrastructure } from '../../types/state/Infrastructure';
import { Info } from '../../types/yolo';
import Network from '../../yoloparser/network';
import Host from '../../yoloparser/host';
import OS from '../../yoloparser/os';

export const updateInfo = (info: Info): Infrastructure.Actions.Types => (
  {
    type: Infrastructure.Actions.UPDATE_INFO,
    info,
  }
);

export const updateNetworks = (networks: Network[]): Infrastructure.Actions.Types => (
  {
    type: Infrastructure.Actions.UPDATE_NETWORKS,
    networks,
  }
);

export const updateHosts = (hosts: Host[]): Infrastructure.Actions.Types => (
  {
    type: Infrastructure.Actions.UPDATE_HOSTS,
    hosts,
  }
);

export const updateOS = (os: OS[]): Infrastructure.Actions.Types => (
  {
    type: Infrastructure.Actions.UPDATE_OS,
    os,
  }
);
