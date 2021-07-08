import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {headerPropTypes} from './header-prop-types.jsx';
import {AuthorizationStatus} from '../../consts.js';
import {logout} from '../../services/api-actions.js';

function Header({title = null, modifierClass, authorizationStatus, logoff}) {
  return (
    authorizationStatus === AuthorizationStatus.AUTH ?
      <header className={`page-header ${modifierClass}`} >
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        {title && <h1 className="page-title user-page__title">{title}</h1>}
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <Link to="/mylist"><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link>
            </div>
          </li>
          <li className="user-block__item">
            <Link onClick={logoff} to="/login" className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header> :
      <header className={`page-header ${modifierClass}`}>
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <div className="user-block">
          <Link to="/login" className="user-block__link">Sign in</Link>
        </div>
      </header>
  );
}

Header.propTypes = headerPropTypes;

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  logoff() {
    dispatch(logout());
  },
});

export {Header};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
