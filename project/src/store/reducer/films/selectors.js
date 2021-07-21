import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {findGenres} from './find-genres.js';

export const getFilms = (state) => state[NameSpace.FILMS].films;
export const getGenres = createSelector(
  getFilms,
  (films) => findGenres(films),
);
export const getPromoFilm = (state) => state[NameSpace.FILMS].promoFilm;
export const getMyFilms = (state) => state[NameSpace.FILMS].myFilms;
export const getLikeThis = (state) => state[NameSpace.FILMS].likeThis;
export const getReply = (state) => state[NameSpace.FILMS].reply;
