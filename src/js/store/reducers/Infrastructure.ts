import { Infrastructure } from '../../types/state/Infrastructure';

const initState: Infrastructure.State = {
  yaml: '',
  info: {
    description: 'adsf',
  },
};

export default (state = initState, action: Infrastructure.Actions.Types): Infrastructure.State => {
  switch (action.type) {
    case 'UPDATE_YAML':
      return {
        ...state,
        yaml: action.yaml,
      };

    default:
      return state;
  }
};
