import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Subnet from '../yoloparser/subnet';
import { updateShowSubnetHosts as updateShowSubnetHostsAction } from '../store/actions/Visualization';

const SubnetComponent = (props: SubnetProps) => {
  const { data, updateShowSubnetHosts } = props;

  return (
    <div className="col-sm-4">
      <div className="subnet">
        <h4>
          <span>Subnet: </span>
          {data.name}
          <div className="float-right">
            <button
              type="button"
              className="btn btn-link"
              onClick={() => updateShowSubnetHosts(`network.${data.name}`)}
            >
              Hosts
            </button>
          </div>
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
  updateShowSubnetHosts: typeof updateShowSubnetHostsAction;
}

const mapState = () => ({});

const dispatchProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateShowSubnetHosts: updateShowSubnetHostsAction,
  },
  dispatch,
);

export default connect(mapState, dispatchProps)(SubnetComponent);
