/* eslint flowtype-errors/show-errors: 0 */

import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import FreeContentPage from './containers/FreeContentPage';
import Mixing1Page from './containers/Mixing1Page';
// import Mixing2Page from './components/mixing1Content/Mixing2';

export default () => (
  <App>
    <Switch>
      <Route exact path="/mixing/1.1" component={Mixing1Page} />
      <Route exact path="/mixing/1.2" component={Mixing1Page} />
      <Route path="/freecontent" component={FreeContentPage} />
      <Route path="/counter" component={CounterPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
