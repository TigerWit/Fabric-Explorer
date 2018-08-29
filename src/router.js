import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Transaction from './routes/Transaction';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/tx/:txid" exact component={Transaction} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
