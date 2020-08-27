import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import AppState from '../types/state';

const App = (props: AppProps) => {
  const { info } = props;
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Yolo Documentation
        </a>
      </nav>
      test
      {info}
    </div>
  );
};

interface AppProps {
  info: string
}

const mapState = (state: AppState) => (
  {
    info: state.infrastructure.info.description,
  }
);

const dispatchProps = (dispatch: Dispatch) => bindActionCreators(
  {},
  dispatch,
);

export default connect(mapState, dispatchProps)(App);
