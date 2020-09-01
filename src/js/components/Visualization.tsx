import * as React from 'react';
import { connect } from 'react-redux';
import AppState from '../types/state';
import { Info } from '../types/yolo';
import Network from '../yoloparser/network';
import Host from '../yoloparser/host';
import NetworkComponent from './Network';
import HostComponent from './Host';

const Visualization = (props: VisualizationProps) => {
  const {
    info,
    networks,
    hosts,
    showSubnetHosts,
  } = props;
  return (
    <div className="visualization">
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      {networks.map((network) => (<NetworkComponent data={network} key={network.name} />))}
      <div className="hosts">
        {hosts.filter((host) => host.subnet === showSubnetHosts)
          .map((host) => (<HostComponent data={host} key={host.name} />))}
      </div>
    </div>
  );
};

interface VisualizationProps {
  info: Info,
  networks: Network[]
  hosts: Host[]
  showSubnetHosts: string
}

const mapState = (state: AppState) => ({
  info: state.infrastructure.info,
  networks: state.infrastructure.networks,
  hosts: state.infrastructure.hosts,
  showSubnetHosts: state.visualization.showSubnetHosts,
});

export default connect(mapState)(Visualization);
