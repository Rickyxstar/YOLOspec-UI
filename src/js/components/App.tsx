import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import AppState from '../types/state';

const App = (props: AppProps) => {
  const { info } = props;
  return (
    <div>
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
