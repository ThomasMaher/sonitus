import React, { Component } from 'react';
import Input from '../components/input/Input';
import CreateContent from '../components/input/Create.jsx';

export default class InputPage extends Component {
  render() {
    let content;

    switch (this.props.location.pathname) {
      case "/input":
        content = <Input />;
        break;
      default:
        content = <CreateContent props={this.props.location.pathname} />;
    }
    return (
      content
    );
  }
}
