/* eslint flowtype-errors/show-errors: 0 */

import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import FreeContentPage from './containers/FreeContentPage';
import Mixing1Page from './containers/Mixing1Page';
import Mixing2Page from './containers/Mixing2Page';
import InputPage from './containers/InputPage';

export default () => (
  <App>
    <Switch>
      <Route path="/mixing/1" component={Mixing1Page} />
      <Route path="/mixing/2" component={Mixing2Page} />
      <Route path="/freecontent" component={FreeContentPage} />
      <Route path="/counter" component={CounterPage} />
      <Route path="/input" component={InputPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
