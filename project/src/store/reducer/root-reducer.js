import {combineReducers} from 'redux';
import {user} from './user/user.js';
import {films} from './films/films.js';
import {view} from './view/view.js';

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
