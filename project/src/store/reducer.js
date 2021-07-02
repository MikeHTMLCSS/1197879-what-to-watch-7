import {ActionType} from './action.js';
import {AuthorizationStatus} from '../consts.js';
import {adaptFilm} from './adapter.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  films: false,
  promoFilm: false,
  choosedGenre: false,
  myFilms: false,
  filmsLikeThis: new Map(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTORIZATION:
      return {
        ...state,
        authorizationStatus: action.status,
      };
    case ActionType.LOGIN:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.AUTH,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NOT_AUTH,
      };
    case ActionType.GET_FILMS_LIST:
      return {
        ...state,
        films: action.films.map((film) => adaptFilm(film)),
      };
    case ActionType.GET_PROMO_FILM:
      return {
        ...state,
        promoFilm: adaptFilm(action.promoFilm),
      };
    case ActionType.CHOOSE_GENRE:
      return {
        ...state,
        choosedGenre: action.genre,
      };
    case ActionType.GET_MY_FILMS_LIST:
      return {
        ...state,
        myFilms: action.myFilms.map((film) => adaptFilm(film)),
      };
    case ActionType.GET_FILMS_LIKE_THIS:
      return {
        ...state,
        filmsLikeThis: state.filmsLikeThis.set(action.id, action.filmsLikeThis),
      };
    default:
      return state;
  }
};

export {reducer};
