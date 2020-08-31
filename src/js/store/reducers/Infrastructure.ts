import { Infrastructure } from '../../types/state/Infrastructure';

const initState: Infrastructure.State = {
  yaml: '',
  info: {
    title: '',
    description: '',
  },
  networks: [],
};

export default (state = initState, action: Infrastructure.Actions.Types): Infrastructure.State => {
  switch (action.type) {
    case 'UPDATE_YAML':
      return {
        ...state,
        yaml: action.yaml,
      };

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

    default:
      return state;
  }
};
