import { RETRIEVE_CONTENT, CREATE_CONTENT } from '../actions/input_actions.js';

let defaultState = {
  noClass: {
    noLesson1: "no content",
    noLesson2: "no content2",
  },
};


export default function content(state = defaultState, action) {
  let currentState = state;
  debugger;
  switch(action.type) {
    case RETRIEVE_CONTENT:
      // This would be used to retrieve lessons form a database;
      return currentState;
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
