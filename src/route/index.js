import React from 'react';
import {
  Router, Switch  
} from 'dva/router';
import routeConfig from './routeConfig'
import { renderRoutes } from 'react-router-config'

function RouterConfig({ history }) {
    return (
      <Router history={history}>
        <Switch>
        {renderRoutes(routeConfig)}
        </Switch>
      </Router>
    );
  }


export default RouterConfig