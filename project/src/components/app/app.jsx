import {connect} from 'react-redux';
import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {RoutePath} from '../../consts.js';
import PrivateRoute from '../private-route/private-route.jsx';
import IdRoute from '../id-route/id-route.jsx';
import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';
import Film from '../film/film.jsx';
import AddReview from '../add-review/add-review.jsx';
import Player from '../player/player.jsx';
import NotFound from '../not-found/not-found.jsx';
import {appPropTypes} from './app-prop-types.jsx';
import {checkAuth, fetchFilmsList} from '../../services/api-actions/api-actions.js';

function App({checkAuthorization, getFilmsList}) {
  useEffect(() => {
    checkAuthorization();
    getFilmsList();
  }, [checkAuthorization, getFilmsList]);
  return (
    <Switch>
      <Route path={RoutePath.MAIN} exact>
        <Main />
      </Route>
      <Route path={RoutePath.SIGN_IN} exact>
        <SignIn />
      </Route>
      <PrivateRoute path={RoutePath.MY_LIST} exact render={(props) => <MyList {...props} />} />
      <Route path={RoutePath.FILM} exact render={(props) => <IdRoute render={({match}) => <Film match={match} />} {...props} />} />
      <PrivateRoute path={RoutePath.ADD_REVIEW} exact render={(props) => <IdRoute render={({match}) => <AddReview match={match} />} {...props} />} />
      <Route path={RoutePath.PLAYER} exact render={(props) => <IdRoute render={({match}) => <Player match={match} />} {...props} />} />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

App.propTypes = appPropTypes;

const mapDispathToProps = (dispatch) => ({
  checkAuthorization() {
    dispatch(checkAuth());
  },
  getFilmsList() {
    dispatch(fetchFilmsList());
  },
});

export {App};

export default connect(null, mapDispathToProps)(App);
