import * as React from 'react';
import Subnet from '../yoloparser/subnet';

export default (props: SubnetProps) => {
  const { data } = props;

  return (
    <div className="col-sm-4">
      <div className="subnet">
        <h4>
          <span>Subnet: </span>
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
            <strong>Network Address: </strong>
            {data.networkAddress}
          </li>
          <li>
            <strong>Broadcast Address: </strong>
            {data.broadcast}
          </li>
          <li>
            <strong>Available IPs: </strong>
            {data.availableIPs}
          </li>
        </ul>
      </div>
    </div>
  );
};

interface SubnetProps {
  data: Subnet
}
