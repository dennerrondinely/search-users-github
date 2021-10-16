import React from 'react';
import { Switch } from 'react-router-dom';

import Home from 'pages/Home';

import Route from './Route';
import UserInfo from 'pages/UserInfo';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/user/:id" component={UserInfo} />
  </Switch>
);

export default Routes;
