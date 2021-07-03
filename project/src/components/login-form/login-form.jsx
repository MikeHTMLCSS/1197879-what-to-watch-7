import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginFormPropTypes} from './login-form-prop-types.jsx';
import {login} from '../../services/api-actions.js';
import {browserHistory} from '../../services/browser-history.js';

function LoginForm({signIn}) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <form action="#" className="sign-in__form" onSubmit={(event) => {
      event.preventDefault();
      signIn(formData);
    }}
    >
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input value={formData.email} onChange={handleChange} className="sign-in__input" type="email" placeholder="Email address" name="email" id="user-email" />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input value={formData.password} onChange={handleChange} className="sign-in__input" type="password" placeholder="Password" name="password" id="user-password" autoComplete="on" />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
}

LoginForm.propTypes = loginFormPropTypes;

const mapDispatchToProps = (dispatch) => ({
  signIn(formData) {
    dispatch(login(formData, () => browserHistory.push('/')));
  },
});

export {LoginForm};

export default connect(null, mapDispatchToProps)(LoginForm);
