import {NameSpace} from '../root-reducer';

export const getFilms = (state) => state[NameSpace.FILMS].films;
export const getGenres = (state) => state[NameSpace.FILMS].genres;
export const getPromoFilm = (state) => state[NameSpace.FILMS].promoFilm;
export const getMyFilms = (state) => state[NameSpace.FILMS].myFilms;
export const getLikeThis = (state) => state[NameSpace.FILMS].likeThis;
export const getReply = (state) => state[NameSpace.FILMS].reply;
