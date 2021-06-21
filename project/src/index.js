import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

import {FILMS} from './mocks/films.js';
import {HEAD_FILM} from './mocks/headfilm.js';
import {MY_FILMS} from './mocks/myfilms.js';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <Provider store={store}>
    <App films={FILMS} headFilm={HEAD_FILM} myFilms={MY_FILMS} />
  </Provider>,
  document.getElementById('root'),
);
