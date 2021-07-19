import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginFormPropTypes} from './login-form-prop-types.jsx';
import {login} from '../../services/api-actions/api-actions.js';
import {browserHistory} from '../../services/browser-history.js';
import {useForm} from '../../hooks/use-form.js';

function LoginForm({signIn}) {
  const [formData, handleChange] = useForm({
    email: '',
    password: '',
  });
  const [breakStatus, setBreakStatus] = useState(false);
  const [isFormSended, setIsFormSended] = useState(false);
  return (
    <form action="#" className="sign-in__form" onSubmit={(event) => {
      event.preventDefault();
      signIn(formData, () => browserHistory.push('/'), () => {
        setBreakStatus(true);
        setIsFormSended(false);
      });
      setIsFormSended(true);
    }}
    >
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input value={formData.email} onChange={handleChange} className="sign-in__input" type="email" placeholder="Email address" name="email" id="user-email" />
          <label className="sign-in__label visually-hidden" htmlFor="user-email" data-testid="login">Email address</label>
        </div>
        <div className="sign-in__field">
          <input value={formData.password} onChange={handleChange} className="sign-in__input" type="password" placeholder="Password" name="password" id="user-password" autoComplete="on" />
          <label className="sign-in__label visually-hidden" htmlFor="user-password" data-testid="password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit" disabled={isFormSended}>Sign in</button>
      </div>
      {breakStatus && <p>Bad Request(</p>}
    </form>
  );
}

LoginForm.propTypes = loginFormPropTypes;

const mapDispatchToProps = (dispatch) => ({
  signIn(formData, redirect, sayBadRequest) {
    dispatch(login(formData, redirect, sayBadRequest));
  },
});

export {LoginForm};

export default connect(null, mapDispatchToProps)(LoginForm);
