export namespace Visualization {
  export interface State {
    showSubnetHosts: string
  }

  export namespace Actions {
    export const UPDATE_SHOW_SUBNET_HOSTS = 'UPDATE_SHOW_SUBNET_HOSTS';
    export const HIDE_ALL_HOSTS = 'HIDE_ALL_HOSTS';

    export interface UpdateShowSubnetHosts {
      type: typeof UPDATE_SHOW_SUBNET_HOSTS,
      showSubnetHosts: string
    }

    export interface HideAllHosts {
      type: typeof HIDE_ALL_HOSTS
    }
    export type Types = UpdateShowSubnetHosts | HideAllHosts;
  }
}
