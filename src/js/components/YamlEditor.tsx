import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import YAML from 'yaml';
import Yolo from '../yoloparser';
import { updateInfo } from '../store/actions/Infrastructure';

class YamlEditor extends React.Component<YamlEditorProps, YamlEditorState> {
  constructor(props: YamlEditorProps) {
    super(props);

    this.state = {
      hasError: false,
      yaml: '',
    };
  }

  changeYAML(e: React.ChangeEvent<HTMLTextAreaElement>) {
    let hasError = false;
    const { updateInfrastructureInfo } = this.props;

    try {
      const yolo = new Yolo(YAML.parse(e.target.value));
      updateInfrastructureInfo(yolo.getInfo());
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
  updateInfrastructureInfo: typeof updateInfo
}

interface YamlEditorState {
  hasError: boolean,
  yaml: string
}

const mapState = () => ({});

const dispatchProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateInfrastructureInfo: updateInfo,
  },
  dispatch,
);

export default connect(mapState, dispatchProps)(YamlEditor);
