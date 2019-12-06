import React from "react";
import {render} from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Admin from "layouts/Admin.js";
import Login from './layouts/Login';
import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Login} />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
