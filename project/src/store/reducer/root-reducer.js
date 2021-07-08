import {combineReducers} from 'redux';
import {user} from './user.js';
import {films} from './films.js';
import {view} from './view.js';

export const NameSpace = {
  USER: 'USER',
  FILMS: 'FILMS',
  VIEW: 'VIEW',
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.FILMS]: films,
  [NameSpace.VIEW]: view,
});
