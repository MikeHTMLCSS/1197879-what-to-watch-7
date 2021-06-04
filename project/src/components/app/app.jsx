import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import SignIn from '../signIn/signIn.jsx';
import MyList from '../myList/myList.jsx';
import Film from '../film/film.jsx';
import AddReview from '../addReview/addReview.jsx';
import Player from '../player/player.jsx';
import NotFound from '../notFound/notFound.jsx';

function App({films, header}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main films={films} header={header} />
        </Route>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/mylist" exact>
          <MyList />
        </Route>
        <Route path="/films/:id" exact>
          <Film />
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview />
        </Route>
        <Route path="/player/:id" exact>
          <Player />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  films: PropTypes.arrayOf({
    movieTitle: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  header: {
    filmTitle: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  },
};

export default App;
