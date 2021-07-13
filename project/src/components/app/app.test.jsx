import App from './app.jsx';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, RoutePath} from '../../consts.js';

let history = null;
let store = null;
let fakeApp = null;

describe('Application routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const createFakeStore = configureStore({});
    store = createFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
      FILMS: {
        films: [],
        promoFilm: {},
        myFilms: [],
        likeThis: {
          films: [],
          id: 1,
        },
      },
      VIEW: {
        choosedGenre: false,
      },
    });
    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });
  it('Should render Main on /', () => {
    history.push(RoutePath.MAIN);
    render(fakeApp);
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});
