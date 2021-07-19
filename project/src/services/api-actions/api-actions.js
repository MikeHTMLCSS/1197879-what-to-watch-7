import {signIn, logoff, getFilmsList, getPromoFilm, getMyFilmsList, getFilmsLikeThis, getComments, changeIsFavoriteStatus} from '../../store/action/action.js';
import {APIRoute} from '../../consts.js';

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(signIn(data.avatar_url)))
    .catch(() => dispatch(logoff()))
);

export const login = ({email, password}, redirect, sayBadRequest) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(signIn(data.avatar_url));
      redirect();
    })
    .catch(() => sayBadRequest())
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(logoff());
    })
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

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(getComments(data, id)))
);

export const writeComment = (id, {rating, reviewText: comment}, redirect, sayBadRequest) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then(() => redirect())
    .catch(() => sayBadRequest())
);

export const changeIsFavorite = (status, id) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id + 1}/${+status}`)
    .then(() => dispatch(changeIsFavoriteStatus(status, id)))
);
