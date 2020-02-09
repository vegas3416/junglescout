import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './data/store';
import { PersistGate } from 'redux-persist/es/integration/react';

import { App } from './container';

import './styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
