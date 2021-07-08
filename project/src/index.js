import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './services/api.js';
import reducer from './store/reducer/root-reducer.js';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const api = createAPI();

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
