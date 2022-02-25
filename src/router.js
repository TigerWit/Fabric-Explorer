import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Transaction from './routes/Transaction';
import Block from './routes/Block';
import Node from './routes/Node';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/node" exact component={Node} />
        <Route path="/tx/:txid" exact component={Transaction} />
        <Route path="/block/:blockNum" exact component={Block} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
