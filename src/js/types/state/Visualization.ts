export namespace Visualization {
  export interface State {
    showSubnetHosts: string
  }

  export namespace Actions {
    export const UPDATE_SHOW_SUBNET_HOSTS = 'UPDATE_SHOW_SUBNET_HOSTS';

    export interface UpdateShowSubnetHosts {
      type: typeof UPDATE_SHOW_SUBNET_HOSTS,
      showSubnetHosts: string
    }

    export type Types = UpdateShowSubnetHosts;
  }
}
