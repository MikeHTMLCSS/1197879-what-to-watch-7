import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {headerPropTypes} from './header-prop-types.jsx';
import {AuthorizationStatus} from '../../consts.js';
import {getAuthorizationStatus, getAvatarSrc} from '../../store/reducer/user/selectors.js';
import {logout} from '../../services/api-actions/api-actions.js';

function Header({children, modifierClass, authorizationStatus, avatarSrc, logoff}) {
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
        {children}
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <Link to="/mylist"><img src={avatarSrc} alt="User avatar" width="63" height="63" /></Link>
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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  avatarSrc: getAvatarSrc(state),
});

const mapDispatchToProps = (dispatch) => ({
  logoff() {
    dispatch(logout());
  },
});

export {Header};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
