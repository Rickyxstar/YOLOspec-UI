export namespace Infrastructure {
  export interface State {
    yaml: string
    info: {
      description: string
    }
  }

  export namespace Actions {
    export const UPDATE_YAML = 'UPDATE_YAML';

    export interface UpdateYAML {
      type: typeof UPDATE_YAML,
      yaml: string
    }

    export type Types = UpdateYAML;
  }
}
