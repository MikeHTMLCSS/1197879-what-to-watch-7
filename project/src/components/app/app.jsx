import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {RoutePath} from '../../consts.js';
import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';
import Film from '../film/film.jsx';
import AddReview from '../add-review/add-review.jsx';
import Player from '../player/player.jsx';
import NotFound from '../not-found/not-found.jsx';
import {appPropTypes} from './app-prop-types.jsx';

function App({films, headFilm, myFilms}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={RoutePath.MAIN} exact>
          <Main films={films} headFilm={headFilm} />
        </Route>
        <Route path={RoutePath.SIGN_IN} exact>
          <SignIn />
        </Route>
        <Route path={RoutePath.MY_LIST} exact>
          <MyList films={films} myFilms={myFilms} />
        </Route>
        <Route path={RoutePath.FILM} exact render={(props) => <Film {...props} films={films} />} />
        <Route path={RoutePath.ADD_REVIEW} exact render={(props) => <AddReview {...props} films={films} />} />
        <Route path={RoutePath.PLAYER} exact render={(props) => <Player {...props} films={films} />} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = appPropTypes;

export default App;
