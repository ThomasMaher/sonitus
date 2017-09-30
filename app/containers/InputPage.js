import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/input/Input';
import CreateContent from '../components/input/Create.jsx';
import * as ContentActions from '../actions/input_actions';
import { selectLessonPlan } from '../reducers/selectors';

class InputPage extends Component {
  render() {
    let content;
    let thisClass;
    let thisLesson;

    const dispatch = {
      saveContent: this.props.saveContent,
      getLesson: this.props.getLesson,
      selectLessonPlan: this.props.selectLessonPlan,
    };

    const get = {
      content: this.props.content,
      lessonPlan: this.props.selectLessonPlan,
    }

    switch (this.props.location.pathname) {
      case "/input":
        content = <Input get={get} dispatch={dispatch}/>;
        break;
      default:
        content = <CreateContent get={get} dispatch={dispatch}/>;
    }
    return (
      content
    );
  }
}

function mapStateToProps(state) {
  return {
    content: state.content,
    selectLessonPlan: selectLessonPlan(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveContent: (content) => dispatch(ContentActions.createContent(content)),
    getLesson: (data) => dispatch(ContentActions.retrieveLesson(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPage);
