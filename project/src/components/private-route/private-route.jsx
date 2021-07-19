import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RoutePath, AuthorizationStatus} from '../../consts.js';
import Loading from '../loading/loading.jsx';
import {privateRoutePropTypes} from './private-route-prop-types.jsx';

function PrivateRoute({render, path, exact, authorizationStatus, isInvert = false}) {
  switch(authorizationStatus) {
    case AuthorizationStatus.UNKNOWN:
      return <Route path={path} exact={exact} render={(props) => <Loading />} />;
    case AuthorizationStatus.AUTH:
      if (!isInvert) {
        return <Route path={path} exact={exact} render={(props) => render(props)} />;
      } else {
        return <Route path={path} exact={exact} render={(props) => <Redirect to={RoutePath.MAIN} />} />;
      }
    case AuthorizationStatus.NOT_AUTH:
      if (!isInvert) {
        return <Route path={path} exact={exact} render={(props) => <Redirect to={RoutePath.SIGN_IN} />} />;
      } else {
        return <Route path={path} exact={exact} render={(props) => render(props)} />;
      }
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
