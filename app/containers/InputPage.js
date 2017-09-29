import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/input/Input';
import CreateContent from '../components/input/Create.jsx';
import * as ContentActions from '../actions/input_actions';

class InputPage extends Component {
  render() {
    let content;
    let thisClass;
    let thisLesson;

    const dispatch = {
      saveContent: this.props.saveContent,
      getLesson: this.props.getLesson,
    };

    switch (this.props.location.pathname) {
      case "/input":
        content = <Input props={this.props} dispatch={dispatch}/>;
        break;
      default:
        content = <CreateContent content={this.props.content}
        dispatch={dispatch}    />;
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
    saveContent: () => dispatch(ContentActions.createContent),
    getLesson: (data) => dispatch(ContentActions.retrieveLesson(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPage);
