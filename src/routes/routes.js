import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import GiveConsent from 'containers/giveConsent';
import ListConsents from 'containers/listConsents';
import { history } from '../redux/store';
import { giveConsentRoute, listConsentRoute } from './routesAddress';

const routes = () => (
  <ConnectedRouter basename="/" history={history}>
    <Switch>
      <Route path={giveConsentRoute} component={GiveConsent} />
      <Route path={listConsentRoute} component={ListConsents} />
      <Redirect to={giveConsentRoute} />
    </Switch>
  </ConnectedRouter>
);

export default routes;
