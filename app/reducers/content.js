import { RETRIEVE_LESSON_PLAN, RETRIEVE_LESSON, CREATE_CONTENT } from '../actions/input_actions.js';

let defaultState = {
  noClass: {
    noLesson1: "no content",
    noLesson2: "no content2",
  },
};


export default function content(state = defaultState, action) {
  let currentState = state;

  switch(action.type) {
    case RETRIEVE_LESSON_PLAN:
      // This would be used to retrieve lessons form a database;
      return currentState;
      break;
    case RETRIEVE_LESSON:
      debugger;
      if (currentState.hasOwnProperty(action.data.thisClass)) {
        if (currentState.hasOwnProperty(action.data.lesson)) {
          return currentState[action.data[thisClass][lesson]];
        } else { return "Class not found"}
      } else { return "Class not found"}
      break;
    case CREATE_CONTENT:
      currentClass = action.data.class;
      currentState[currentClass] = action.data.content;
      return currentState;
      break;
    default:
      return currentState;
      break;
  }
}
