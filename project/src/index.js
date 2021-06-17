import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {ROUTE_PATH, RATING_SCALE} from './consts.js';

import {FILMS} from './mocks/films.js';
import {HEAD_FILM} from './mocks/headfilm.js';
import {MY_FILMS} from './mocks/myfilms.js';

ReactDOM.render(
  <App routePath={ROUTE_PATH} films={FILMS} headFilm={HEAD_FILM} myFilms={MY_FILMS} ratingScale={RATING_SCALE} />,
  document.getElementById('root'),
);
