import {NameSpace} from '../root-reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getAvatarSrc = (state) => state[NameSpace.USER].avatarSrc;
