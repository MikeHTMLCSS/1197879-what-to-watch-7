import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RoutePath, AuthorizationStatus} from '../../consts.js';
import {privateRoutePropTypes} from './private-route-prop-types.jsx';

function PrivateRoute({render, path, exact, authorizationStatus}) {
  return (
    <Route path={path} exact={exact} render={(props) => (authorizationStatus === AuthorizationStatus.AUTH ? render(props) : <Redirect to={RoutePath.SIGN_IN} />)} />
  );
}

PrivateRoute.propTypes = privateRoutePropTypes;

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export {PrivateRoute};

export default connect(mapStateToProps)(PrivateRoute);
