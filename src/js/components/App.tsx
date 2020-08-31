import * as React from 'react';
import YamlEditor from './YamlEditor';
import Visualization from './Visualization';

export default () => (
  <div className="container-fluid main">
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Yolo Documentation
      </a>
    </nav>
    <div className="yolo-row">
      <YamlEditor />
      <Visualization />
    </div>
  </div>
);
