// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import content from './content';

const rootReducer = combineReducers({
  counter,
  content,
  router,
});

export default rootReducer;
