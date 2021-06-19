export const ROUTE_PATH = {
  main: '/',
  signIn: '/login',
  myList: '/mylist',
  film: '/films/:id',
  addReview: '/films/:id/review',
  player: '/player/:id',
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
export const GENRES = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];
export const MOVIE_CARD_TIME = 1000;
