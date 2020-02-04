/* eslint-disable node/no-unsupported-features */
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import session from 'redux-persist/es/storage/session';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { indeedCentral } from './reducers';

const persistConfig = {
  key: 'root',
  storage: session, // do not persist after closing the browser
  stateReconciler: hardSet // note: only hardSet persists
};
const middleware = [thunk, promise];
const combinedReducers = combineReducers({ indeedCentral });
const persistedReducers = persistReducer(persistConfig, combinedReducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducers,
  composeEnhancers(applyMiddleware(...middleware))
);

if (module.hot) {
  module.hot.accept(() => {
    store.replaceReducer(persistedReducers);
  });
}

export const persistor = persistStore(store);
export default store;
