import React from 'react';
import { Switch } from 'react-router-dom';

import Home from 'pages/Home';

import Route from './Route';
import UserInfo from 'pages/UserInfo';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact isPrivate />
    <Route path="/user/:id" component={UserInfo} isPrivate />
  </Switch>
);

export default Routes;
