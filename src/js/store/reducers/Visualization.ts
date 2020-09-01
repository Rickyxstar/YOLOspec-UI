import { Visualization } from '../../types/state/Visualization';

const initState: Visualization.State = {
  showSubnetHosts: '',
};

export default (state = initState, action: Visualization.Actions.Types): Visualization.State => {
  switch (action.type) {
    case 'UPDATE_SHOW_SUBNET_HOSTS':
      return {
        ...state,
        showSubnetHosts: action.showSubnetHosts,
      };

    case 'HIDE_ALL_HOSTS':
      return {
        ...state,
        showSubnetHosts: '',
      };

    default:
      return state;
  }
};
