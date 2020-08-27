import { Infrastructure } from '../../types/state/Infrastructure';

const initState: Infrastructure.State = {
  info: {
    description: 'adsf',
  },
};

export default (state = initState, action: Infrastructure.Actions.Types): Infrastructure.State => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
