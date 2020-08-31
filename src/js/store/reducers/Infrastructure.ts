import { Infrastructure } from '../../types/state/Infrastructure';

const initState: Infrastructure.State = {
  yaml: '',
  info: {
    title: '',
    description: '',
  },
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

    default:
      return state;
  }
};
