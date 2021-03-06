import { Visualization } from '../../types/state/Visualization';

export const updateShowSubnetHosts = (showSubnetHosts: string): Visualization.Actions.Types => (
  {
    type: Visualization.Actions.UPDATE_SHOW_SUBNET_HOSTS,
    showSubnetHosts,
  }
);

export const hideAllHosts = (): Visualization.Actions.Types => (
  {
    type: Visualization.Actions.HIDE_ALL_HOSTS,
  }
);
