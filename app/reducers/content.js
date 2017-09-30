import { RETRIEVE_LESSON_PLAN, RETRIEVE_LESSON, CREATE_CONTENT } from '../actions/input_actions.js';

let defaultState = {
  currentClass: [
    "testClass", "lesson1"
  ],
  testClass: {
    lesson1: "Add content here",
  }
};


export default function content(state = defaultState, action) {
  let currentState = state;

  switch(action.type) {
    case RETRIEVE_LESSON_PLAN:
      // This would be used to retrieve lessons form a database;
      return currentState;
      break;
    case RETRIEVE_LESSON:
      currentState['currentClass'] = [
        action.data.thisClass, action.data.lesson,
      ];
      return currentState;
      break;
    case CREATE_CONTENT:
      let data = action.data;
      let currentClass = data.thisClass;
      let currentLesson = data.thisLesson;
      currentState[currentClass] = {
        currentLesson: data.value
      };
      return currentState;
      break;
    default:
      return currentState;
      break;
  }
}
