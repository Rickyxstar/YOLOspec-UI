import * as React from 'react';
import { connect } from 'react-redux';
import AppState from '../types/state';
import { Info } from '../types/yolo';

const Visualization = (props: VisualizationProps) => {
  const { info } = props;
  return (
    <div className="container-fluid">
      <h1>{info.title}</h1>
      <p>{info.description}</p>
    </div>
  );
};

interface VisualizationProps {
  info: Info
}

const mapState = (state: AppState) => ({
  info: state.infrastructure.info,
});

export default connect(mapState)(Visualization);
