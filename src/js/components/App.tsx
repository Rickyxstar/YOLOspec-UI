import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import AppState from '../types/state';
import { updateYAML } from '../store/actions/Infrastructure';

const App = (props: AppProps) => {
  const { yaml, updateYAMLProp } = props;
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Yolo Documentation
        </a>
      </nav>
      <div className="row">
        <div className="col-sm-4">
          <textarea value={yaml} onChange={(e) => updateYAMLProp(e.target.value)} />
        </div>
        <div className="col-sm-8">
          Documentation soon
        </div>
      </div>
    </div>
  );
};

interface AppProps {
  yaml: string
  updateYAMLProp: typeof updateYAML
}

const mapState = (state: AppState) => (
  {
    yaml: state.infrastructure.yaml,
  }
);

const dispatchProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateYAMLProp: updateYAML,
  },
  dispatch,
);

export default connect(mapState, dispatchProps)(App);
