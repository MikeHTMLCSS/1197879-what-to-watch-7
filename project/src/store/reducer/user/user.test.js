import {user} from './user.js';
import {signIn, logoff} from '../../action/action.js';
import {AuthorizationStatus} from '../../../consts.js';

describe('Reducer for user', () => {
  it('Should sign in', () => {
    let state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
    };
    expect(user(state, signIn())).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
    state = {
      authorizationStatus: AuthorizationStatus.NOT_AUTH,
    };
    expect(user(state, signIn())).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
    state = {
      authorizationStatus: AuthorizationStatus.AUTH,
    };
    expect(user(state, signIn())).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
  });
  it('Should log off', () => {
    let state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
    };
    expect(user(state, logoff())).toEqual({
      authorizationStatus: AuthorizationStatus.NOT_AUTH,
    });
    state = {
      authorizationStatus: AuthorizationStatus.NOT_AUTH,
    };
    expect(user(state, logoff())).toEqual({
      authorizationStatus: AuthorizationStatus.NOT_AUTH,
    });
    state = {
      authorizationStatus: AuthorizationStatus.AUTH,
    };
    expect(user(state, logoff())).toEqual({
      authorizationStatus: AuthorizationStatus.NOT_AUTH,
    });
  });
});
