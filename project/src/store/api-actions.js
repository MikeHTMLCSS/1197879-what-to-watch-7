import {ActionCreator} from './action.js';
import {AuthorizationStatus, APIRoute} from '../consts.js';

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAutorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAutorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.getFilmsList(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(ActionCreator.getPromoFilm(data)))
);

export const fetchMyFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(ActionCreator.getMyFilmsList(data)))
);

export const fetchFilmsLikeThis = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}${APIRoute.SIMILAR}`)
    .then(({data}) => dispatch(ActionCreator.getFilmsLikeThis(data, id)))
);
