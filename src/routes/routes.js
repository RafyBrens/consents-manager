import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import GiveConsent from 'containers/giveConsent';
import ListConsents from 'containers/listConsents';
import { history } from '../redux/store';

const routes = () => (
  <ConnectedRouter history={history}>
    <Router basename="/">
      <Switch>
        <Route path="/give-cosent" component={GiveConsent} />
        <Route path="/consents" component={ListConsents} />
        <Redirect to="/give-cosent" />
      </Switch>
    </Router>
  </ConnectedRouter>
);

export default routes;
