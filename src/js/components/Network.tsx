import * as React from 'react';
import Network from '../yoloparser/network';
import Subnet from './Subnet';

export default (props: NetworkProps) => {
  const { data } = props;

  return (
    <div className="network" key={data.name}>
      <h4>
        <span>Network: </span>
        {data.name}
      </h4>
      <ul>
        <li>
          <strong>CIDR: </strong>
          {data.cidr}
        </li>
        <li>
          <strong>Netmask: </strong>
          {data.netmask}
        </li>
        <li>
          <strong>Gateway: </strong>
          {data.gateway}
        </li>
        <li>
          <strong>DNS:</strong>
          <ul>
            {data.dns.map((dns) => (<li key={dns}>{dns}</li>))}
          </ul>
        </li>
      </ul>
      <div className="subnets">
        {data.subnets.map((subnet) => <Subnet data={subnet} key={subnet.name} />)}
      </div>
    </div>
  );
};

interface NetworkProps {
  data: Network
}
