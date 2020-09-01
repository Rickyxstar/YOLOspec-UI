import { Infrastructure } from './Infrastructure';
import { Visualization } from './Visualization';

export default interface AppState {
  infrastructure: Infrastructure.State,
  visualization: Visualization.State,
}
