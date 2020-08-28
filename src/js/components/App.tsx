import * as React from 'react';
import YamlEditor from './YamlEditor';

export default () => (
  <div className="container-fluid">
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Yolo Documentation
      </a>
    </nav>
    <div className="row">
      <div className="col-sm-4">
        <YamlEditor />
      </div>
      <div className="col-sm-8">
        Documentation soon
      </div>
    </div>
  </div>
);
