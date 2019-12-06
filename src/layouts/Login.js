import React, {Fragment} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import styles from 'assets/jss/material-dashboard-react/layouts/adminStyle.js';
import loginRoutes from '../routes/login-routes';

const switchRoutes = (
  <Switch>
    {loginRoutes.map((prop, key) => {
      if(prop.layout === '/auth') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/auth" to="/auth/login"/>
  </Switch>
);

function Login(props){
  
  return (
    <Fragment>
  
      {switchRoutes}
    </Fragment>
  );
}

export default Login;
