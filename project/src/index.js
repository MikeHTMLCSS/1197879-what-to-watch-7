import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './services/api.js';
import {reducer} from './store/reducer.js';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

let store = null;

const api = createAPI(() => store);

store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
