export const ActionType = {
  REQUIRE_AUTORIZATION: 'user/requireAutorization',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
  GET_FILMS_LIST: 'data/getFilmsList',
  GET_PROMO_FILM: 'data/getPromoFilm',
  GET_MY_FILMS_LIST: 'data/getMyFilmsList',
  GET_FILMS_LIKE_THIS: 'data/getFilmsLikeThis',
  CHOOSE_GENRE: 'filmsLlist/chooseGenre',
};

export const ActionCreator = {
  requireAutorization: (status) => ({
    type: ActionType.REQUIRE_AUTORIZATION,
    status: status,
  }),
  login: () => ({
    type: ActionType.LOGIN,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  getFilmsList: (films) => ({
    type: ActionType.GET_FILMS_LIST,
    films: films,
  }),
  getPromoFilm: (promoFilm) => ({
    type: ActionType.GET_PROMO_FILM,
    promoFilm: promoFilm,
  }),
  chooseGenre: (genre) => ({
    type: ActionType.CHOOSE_GENRE,
    genre: genre,
  }),
  getMyFilmsList: (myFilms) => ({
    type: ActionType.GET_MY_FILMS_LIST,
    myFilms: myFilms,
  }),
  getFilmsLikeThis: (filmsLikeThis, id) => ({
    type: ActionType.GET_FILMS_LIKE_THIS,
    filmsLikeThis: filmsLikeThis,
    id: id,
  }),
};
