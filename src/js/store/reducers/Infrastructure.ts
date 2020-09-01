import { Infrastructure } from '../../types/state/Infrastructure';

const initState: Infrastructure.State = {
  info: {
    title: '',
    description: '',
  },
  networks: [],
  hosts: [],
};

export default (state = initState, action: Infrastructure.Actions.Types): Infrastructure.State => {
  switch (action.type) {
    case 'UPDATE_INFO':
      return {
        ...state,
        info: action.info,
      };

    case 'UPDATE_NETWORKS':
      return {
        ...state,
        networks: action.networks,
      };

    case 'UPDATE_HOSTS':
      return {
        ...state,
        hosts: action.hosts,
      };

    default:
      return state;
  }
};
