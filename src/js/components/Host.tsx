import * as React from 'react';
import Host from '../yoloparser/host';

export default (props: HostProps) => {
  const { data } = props;

  return (
    <div className="col-sm-4">
      <div className="host">
        <h4>
          <span>Host: </span>
          {data.name}
        </h4>
        <ul>
          <li>
            <strong>Host Name: </strong>
            {data.hostname}
          </li>
          <li>
            <strong>IP Address: </strong>
            {data.ipaddress}
          </li>
        </ul>
      </div>
    </div>
  );
};

interface HostProps {
  data: Host
}
