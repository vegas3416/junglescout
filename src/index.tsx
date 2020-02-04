import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/main.scss';
import App from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={() => <App />} />
    </Switch>
  </Router>,
  document.getElementById('app')
);
