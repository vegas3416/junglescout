import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';

import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import session from 'redux-persist/es/storage/session';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { homeHub } from './reducers/homeHub';

const persistConfig = {
  key: 'root',
  storage: session, // do not persist after closing the browser
  stateReconciler: hardSet // note: only hardSet persists
};
const middleware = [thunk];

const combinedReducers = combineReducers({ homeHub: homeHub });

export type IAppState = ReturnType<typeof combinedReducers>;

const persistedReducers = persistReducer(persistConfig, combinedReducers);

const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

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
