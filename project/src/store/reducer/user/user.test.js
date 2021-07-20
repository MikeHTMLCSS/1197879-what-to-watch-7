import {user} from './user.js';
import {signIn, logoff} from '../../action/action.js';
import {AuthorizationStatus} from '../../../consts.js';

describe('Reducer for user', () => {
  it('Should sign in', () => {
    let state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      avatarSrc: '',
    };
    expect(user(state, signIn('avatar'))).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      avatarSrc: 'avatar',
    });
    state = {
      authorizationStatus: AuthorizationStatus.NOT_AUTH,
      avatarSrc: '',
    };
    expect(user(state, signIn('avatar'))).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      avatarSrc: 'avatar',
    });
    state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      avatarSrc: 'img',
    };
    expect(user(state, signIn('avatar'))).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      avatarSrc: 'avatar',
    });
  });
  it('Should log off', () => {
    let state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      avatarSrc: '',
    };
    expect(user(state, logoff())).toEqual({
      authorizationStatus: AuthorizationStatus.NOT_AUTH,
      avatarSrc: '',
    });
    state = {
      authorizationStatus: AuthorizationStatus.NOT_AUTH,
      avatarSrc: '',
    };
    expect(user(state, logoff())).toEqual({
      authorizationStatus: AuthorizationStatus.NOT_AUTH,
      avatarSrc: '',
    });
    state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      avatarSrc: 'avatar',
    };
    expect(user(state, logoff())).toEqual({
      authorizationStatus: AuthorizationStatus.NOT_AUTH,
      avatarSrc: '',
    });
  });
});
