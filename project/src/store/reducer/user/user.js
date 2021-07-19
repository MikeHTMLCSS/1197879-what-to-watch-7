import {signIn, logoff} from '../../action/action.js';
import {AuthorizationStatus} from '../../../consts.js';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  avatarSrc: '',
};

export const user = createReducer(initialState, (builder) => {
  builder
    .addCase(signIn, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.AUTH;
      state.avatarSrc = action.payload;
    })
    .addCase(logoff, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NOT_AUTH;
      state.avatarSrc = '';
    });
});
