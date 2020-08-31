import { Info } from '../yolo';

export namespace Infrastructure {
  export interface State {
    yaml: string
    info: Info
  }

  export namespace Actions {
    export const UPDATE_YAML = 'UPDATE_YAML';
    export const UPDATE_INFO = 'UPDATE_INFO';

    export interface UpdateYAML {
      type: typeof UPDATE_YAML,
      yaml: string
    }

    export interface UpdateInfo {
      type: typeof UPDATE_INFO,
      info: Info
    }

    export type Types = UpdateYAML | UpdateInfo;
  }
}
