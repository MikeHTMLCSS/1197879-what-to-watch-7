import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';
import Film from '../film/film.jsx';
import AddReview from '../add-review/add-review.jsx';
import Player from '../player/player.jsx';
import NotFound from '../not-found/not-found.jsx';
import {appPropTypes} from './app-prop-types.jsx';

function App({routePath, films, headFilm, myFilms, ratingScale}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routePath.main} exact>
          <Main films={films} headFilm={headFilm} />
        </Route>
        <Route path={routePath.signIn} exact>
          <SignIn />
        </Route>
        <Route path={routePath.myList} exact>
          <MyList films={films} myFilms={myFilms} />
        </Route>
        <Route path={routePath.film} exact render={(props) => <Film {...props} films={films} ratingScale={ratingScale} />} />
        <Route path={routePath.addReview} exact render={(props) => <AddReview {...props} films={films} />} />
        <Route path={routePath.player} exact render={(props) => <Player {...props} films={films} />} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = appPropTypes;

export default App;
