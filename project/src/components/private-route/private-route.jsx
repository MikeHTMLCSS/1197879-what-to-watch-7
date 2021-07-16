import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RoutePath, AuthorizationStatus} from '../../consts.js';
import Loading from '../loading/loading.jsx';
import {privateRoutePropTypes} from './private-route-prop-types.jsx';

function PrivateRoute({render, path, exact, authorizationStatus}) {
  switch(authorizationStatus) {
    case AuthorizationStatus.UNKNOWN:
      return <Route path={path} exact={exact} render={(props) => <Loading />} />;
    case AuthorizationStatus.AUTH:
      return <Route path={path} exact={exact} render={(props) => render(props)} />;
    case AuthorizationStatus.NOT_AUTH:
      return <Route path={path} exact={exact} render={(props) => <Redirect to={RoutePath.SIGN_IN} />} />;
    default:
      return <Route path={path} exact={exact} render={(props) => <Loading />} />;
  }
}

PrivateRoute.propTypes = privateRoutePropTypes;

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export {PrivateRoute};

export default connect(mapStateToProps)(PrivateRoute);
