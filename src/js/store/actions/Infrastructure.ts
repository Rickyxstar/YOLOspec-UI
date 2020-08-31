import { Infrastructure } from '../../types/state/Infrastructure';
import { Info } from '../../types/yolo';

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
