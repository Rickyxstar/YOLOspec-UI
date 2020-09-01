import * as React from 'react';
import { connect } from 'react-redux';
import AppState from '../types/state';
import { Info } from '../types/yolo';
import Network from '../yoloparser/network';
import Host from '../yoloparser/host';

const Visualization = (props: VisualizationProps) => {
  const { info, networks } = props;
  return (
    <div className="visualization">
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      {networks.map((network) => (
        <div className="network" key={network.name}>
          <h4>
            <span>Network: </span>
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
          <div className="subnets">
            {network.subnets.map((subnet) => (
              <div className="col-sm-4" key={subnet.name}>
                <div className="subnet">
                  <h4>
                    <span>Subnet: </span>
                    {subnet.name}
                  </h4>
                  <ul>
                    <li>
                      <strong>CIDR: </strong>
                      {subnet.cidr}
                    </li>
                    <li>
                      <strong>Netmask: </strong>
                      {subnet.netmask}
                    </li>
                    <li>
                      <strong>Network Address: </strong>
                      {subnet.networkAddress}
                    </li>
                    <li>
                      <strong>Broadcast Address: </strong>
                      {subnet.broadcast}
                    </li>
                    <li>
                      <strong>Available IPs: </strong>
                      {subnet.availableIPs}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

interface VisualizationProps {
  info: Info,
  networks: Network[],
  hosts: Host[];
}

const mapState = (state: AppState) => ({
  info: state.infrastructure.info,
  networks: state.infrastructure.networks,
  hosts: state.infrastructure.hosts,
});

export default connect(mapState)(Visualization);
