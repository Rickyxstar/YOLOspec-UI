import * as React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { bindActionCreators, Dispatch } from 'redux';
import YAML from 'yaml';
import Yolo from '../yoloparser';
import {
  updateInfo,
  updateNetworks,
  updateHosts,
  updateOS,
} from '../store/actions/Infrastructure';

class YamlEditor extends React.Component<YamlEditorProps, YamlEditorState> {
  constructor(props: YamlEditorProps) {
    super(props);

    this.state = {
      hasError: false,
      yaml: '',
    };
  }

  componentDidMount() {
    Axios.get('openyolo.yml')
    .then((res) => this.setState({yaml: res.data}))
    .catch((e) => console.log(e))
  }

  changeYAML(e: React.ChangeEvent<HTMLTextAreaElement>) {
    let hasError = false;
    const {
      updateInfrastructureInfo,
      updateInfrastructureNetworks,
      updateInfrastructureHosts,
      updateInfrastructureOS,
    } = this.props;

    try {
      const yolo = new Yolo(YAML.parse(e.target.value));
      updateInfrastructureInfo(yolo.getInfo());
      updateInfrastructureNetworks(yolo.getNetworks());
      updateInfrastructureHosts(yolo.getHosts());
      updateInfrastructureOS(yolo.getOS());
    } catch (_error) {
      hasError = true;
    }

    this.setState({
      hasError,
      yaml: e.target.value,
    });
  }

  render() {
    const { hasError, yaml } = this.state;
    const errorClass = hasError ? 'has-error' : '';
    return (
      <div className={`yaml-editor ${errorClass}`}>
        <textarea value={yaml} onChange={this.changeYAML.bind(this)} />
      </div>
    );
  }
}

interface YamlEditorProps {
  updateInfrastructureInfo: typeof updateInfo,
  updateInfrastructureNetworks: typeof updateNetworks,
  updateInfrastructureHosts: typeof updateHosts,
  updateInfrastructureOS: typeof updateOS,
}

interface YamlEditorState {
  hasError: boolean,
  yaml: string
}

const mapState = () => ({});

const dispatchProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateInfrastructureInfo: updateInfo,
    updateInfrastructureNetworks: updateNetworks,
    updateInfrastructureHosts: updateHosts,
    updateInfrastructureOS: updateOS,
  },
  dispatch,
);

export default connect(mapState, dispatchProps)(YamlEditor);
