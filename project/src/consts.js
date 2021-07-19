export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NOT_AUTH: 'NOT_AUTH',
  UNKNOWN: 'UNKNOWN',
};
export const APIRoute = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  FILMS: '/films',
  PROMO: '/promo',
  FAVORITE: '/favorite',
  SIMILAR: '/similar',
  COMMENTS: '/comments',
};
export const RoutePath = {
  MAIN: '/',
  SIGN_IN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id',
  ADD_REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
};
export const RATING_SCALE = [
  {
    type: 'Bad',
    value: 1,
  },
  {
    type: 'Normal',
    value: 3,
  },
  {
    type: 'Good',
    value: 5,
  },
  {
    type: 'Very good',
    value: 8,
  },
  {
    type: 'Awesome',
    value: 10,
  },
];
export const MOVIE_CARD_TIME = 1000;
export const FilmPages = {
  OVERVIEW: 'overview',
  DETAILS: 'details',
  REVIEWS: 'reviews',
};
export const SHOW_FILMS_NUMBER = 8;
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
