import {signIn, logoff, getFilmsList, getPromoFilm, getMyFilmsList, getFilmsLikeThis} from '../store/action.js';
import {APIRoute} from '../consts.js';

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(signIn()))
    .catch(() => dispatch(logoff()))
);

export const login = ({email, password}, redirect) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(signIn()))
    .then(() => redirect())
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logoff()))
);

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(getFilmsList(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(getPromoFilm(data)))
);

export const fetchMyFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(getMyFilmsList(data)))
);

export const fetchFilmsLikeThis = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}${APIRoute.SIMILAR}`)
    .then(({data}) => dispatch(getFilmsLikeThis(data, id)))
);
