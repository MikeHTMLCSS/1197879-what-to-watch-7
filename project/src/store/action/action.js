import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SIGN_IN: 'user/signIn',
  LOGOFF: 'user/logoff',
  GET_FILMS_LIST: 'films/getFilmsList',
  GET_PROMO_FILM: 'films/getPromoFilm',
  GET_MY_FILMS_LIST: 'films/getMyFilmsList',
  GET_FILMS_LIKE_THIS: 'films/getFilmsLikeThis',
  CHANGE_IS_FAVORITE_STATUS: 'films/changeIsFavoriteStatus',
  GET_COMMENTS: 'films/getComments',
  CHOOSE_GENRE: 'view/chooseGenre',
};

export const signIn = createAction(ActionType.SIGN_IN);

export const logoff = createAction(ActionType.LOGOFF);

export const getFilmsList = createAction(ActionType.GET_FILMS_LIST, (films) => ({
  payload: films,
}));

export const getPromoFilm = createAction(ActionType.GET_PROMO_FILM, (promoFilm) => ({
  payload: promoFilm,
}));

export const chooseGenre = createAction(ActionType.CHOOSE_GENRE, (genre) => ({
  payload: genre,
}));

export const getMyFilmsList = createAction(ActionType.GET_MY_FILMS_LIST, (myFilms) => ({
  payload: myFilms,
}));

export const getFilmsLikeThis = createAction(ActionType.GET_FILMS_LIKE_THIS, (filmsLikeThis, id) => ({
  payload: {
    filmsLikeThis: filmsLikeThis,
    id: id,
  },
}));

export const getComments = createAction(ActionType.GET_COMMENTS, (comments, id) => ({
  payload: {
    comments: comments,
    id: id,
  },
}));

export const changeIsFavoriteStatus = createAction(ActionType.CHANGE_IS_FAVORITE_STATUS, (status, id) => ({
  payload: {
    status: status,
    id: id,
  },
}));
