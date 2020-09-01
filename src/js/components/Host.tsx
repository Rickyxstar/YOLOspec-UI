import * as React from 'react';
import { connect } from 'react-redux';
import Host from '../yoloparser/host';
import AppState from '../types/state';
import OS from '../yoloparser/os';

const HostComponent = (props: HostProps) => {
  const { data, os } = props;
  const subnetParts = data.subnet.split('.');

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
          <li>
            <strong>Subnet: </strong>
            {subnetParts[subnetParts.length - 1]}
          </li>
          {os
            ? (
              <li>
                <strong>OS: </strong>
                <ul>
                  <li>
                    <strong>Name: </strong>
                    {os.name}
                  </li>
                  <li>
                    <strong>Package Manager: </strong>
                    {os.packagemanager}
                  </li>
                </ul>
              </li>
            )
            : null}
        </ul>
      </div>
    </div>
  );
};

interface HostProps {
  data: Host
  os?: OS | undefined
}

const mapState = (state: AppState, ownProps: HostProps) => ({
  os: state.infrastructure.os.find((os) => `os.${os.name}` === ownProps.data.os),
});

HostComponent.defaultProps = {
  os: undefined,
};

export default connect(mapState)(HostComponent);
