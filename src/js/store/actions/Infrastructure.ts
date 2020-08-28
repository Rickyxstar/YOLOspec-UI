import { Infrastructure } from '../../types/state/Infrastructure';

export const updateYAML = (yaml: string): Infrastructure.Actions.Types => (
  {
    type: Infrastructure.Actions.UPDATE_YAML,
    yaml,
  }
);
