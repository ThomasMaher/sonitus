import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/input/Input';
import CreateContent from '../components/input/Create.jsx';
import * as ContentActions from '../actions/input_actions';

class InputPage extends Component {
  render() {
    let content;

    switch (this.props.location.pathname) {
      case "/input":
        content = <Input />;
        break;
      default:
        content = <CreateContent loc={this.props.location.pathname} />;
    }
    return (
      content
    );
  }
}

function mapStateToProps(state) {
  return {
    content: state.content,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveContent: ContentActions.createContent,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPage);
