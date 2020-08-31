import { Infrastructure } from '../../types/state/Infrastructure';
import { Info } from '../../types/yolo';
import Network from '../../yoloparser/network';

export const updateYAML = (yaml: string): Infrastructure.Actions.Types => (
  {
    type: Infrastructure.Actions.UPDATE_YAML,
    yaml,
  }
);

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
