export namespace Infrastructure {
  export interface State {
    info: {
      description: string
    }
  }

  export namespace Actions {
    export const UPDATE_INFRASTRUCTURE = 'UPDATE_INFRASTRUCTURE';

    export interface UpdateInfrastructure {
      type: typeof UPDATE_INFRASTRUCTURE,
      update: Infrastructure.State
    }

    export type Types = UpdateInfrastructure;
  }
}
