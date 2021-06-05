import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import SignIn from '../signIn/signIn.jsx';
import MyList from '../myList/myList.jsx';
import Film from '../film/film.jsx';
import AddReview from '../addReview/addReview.jsx';
import Player from '../player/player.jsx';
import NotFound from '../notFound/notFound.jsx';
import {RoutePath} from '../../index.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={RoutePath.MAIN} exact>
          <Main />
        </Route>
        <Route path={RoutePath.SIGNIN} exact>
          <SignIn />
        </Route>
        <Route path={RoutePath.MYLIST} exact>
          <MyList />
        </Route>
        <Route path={RoutePath.FILM} exact>
          <Film />
        </Route>
        <Route path={RoutePath.ADDREVIEW} exact>
          <AddReview />
        </Route>
        <Route path={RoutePath.PLAYER} exact>
          <Player />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
