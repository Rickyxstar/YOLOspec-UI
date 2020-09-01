import { combineReducers } from 'redux';
import infrastructure from './Infrastructure';
import visualization from './Visualization';

export default combineReducers({
  infrastructure,
  visualization,
});
