import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './data/store';
import { PersistGate } from 'redux-persist/es/integration/react';

import './styles/main.scss';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route exact path='/' component={() => <App />} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
