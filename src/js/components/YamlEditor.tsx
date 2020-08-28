import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

class YamlEditor extends React.Component<YamlEditorProps, YamlEditorState> {
  constructor(props: YamlEditorProps) {
    super(props);

    this.state = {
      hasError: false,
      yaml: '',
    };
  }

  changeYAML(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      hasError: true,
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

interface YamlEditorProps {}

interface YamlEditorState {
  hasError: boolean,
  yaml: string
}

const mapState = () => ({});

const dispatchProps = (dispatch: Dispatch) => bindActionCreators(
  {},
  dispatch,
);

export default connect(mapState, dispatchProps)(YamlEditor);
