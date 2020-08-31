import * as React from 'react';
import { connect } from 'react-redux';
import AppState from '../types/state';
import { Info } from '../types/yolo';
import Network from '../yoloparser/network';

const Visualization = (props: VisualizationProps) => {
  const { info, networks } = props;
  return (
    <div className="visualization">
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      {networks.map((network) => (
        <div className="network" key={network.name}>
          <h4>
            Network:
            {network.name}
          </h4>
          <ul>
            <li>
              <strong>CIDR: </strong>
              {network.cidr}
            </li>
            <li>
              <strong>Netmask: </strong>
              {network.netmask}
            </li>
            <li>
              <strong>Gateway: </strong>
              {network.gateway}
            </li>
            <li>
              <strong>DNS:</strong>
              <ul>
                {network.dns.map((dns) => (<li>{dns}</li>))}
              </ul>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

interface VisualizationProps {
  info: Info,
  networks: Network[]
}

const mapState = (state: AppState) => ({
  info: state.infrastructure.info,
  networks: state.infrastructure.networks,
});

export default connect(mapState)(Visualization);
