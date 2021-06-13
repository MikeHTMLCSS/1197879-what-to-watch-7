import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {ROUTEPATH, RATINGSCALE} from './consts.js';

import {FILMS} from './mocks/films.js';
import {HEADFILM} from './mocks/headfilm.js';
import {MYFILMS} from './mocks/myfilms.js';

ReactDOM.render(
  <App routePath={ROUTEPATH} films={FILMS} headFilm={HEADFILM} myFilms={MYFILMS} ratingScale={RATINGSCALE} />,
  document.getElementById('root'),
);
