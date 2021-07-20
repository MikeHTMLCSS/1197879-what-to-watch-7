import {getFilmsList, getPromoFilm, getMyFilmsList, getFilmsLikeThis, getComments, changeIsFavoriteStatus} from '../../action/action.js';
import {adaptFilm} from './adapt-film.js';
import {getGenres} from './get-genres.js';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  films: false,
  genres: false,
  promoFilm: false,
  myFilms: false,
  likeThis: {
    films: false,
    id: -1,
  },
  reply: {
    comments: false,
    id: -1,
  },
};

export const films = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilmsList, (state, action) => {
      state.films = action.payload.map((film) => adaptFilm(film));
      state.genres = getGenres(state.films);
    })
    .addCase(getPromoFilm, (state, action) => {
      state.promoFilm = adaptFilm(action.payload);
    })
    .addCase(getMyFilmsList, (state, action) => {
      state.myFilms = action.payload.map((myFilm) => adaptFilm(myFilm));
    })
    .addCase(getFilmsLikeThis, (state, action) => {
      state.likeThis = {
        films: action.payload.filmsLikeThis.map((filmLikeThis) => adaptFilm(filmLikeThis)),
        id: action.payload.id,
      };
    })
    .addCase(getComments, (state, action) => {
      state.reply = {
        comments: action.payload.comments,
        id: action.payload.id,
      };
    })
    .addCase(changeIsFavoriteStatus, (state, action) => {
      state.films[action.payload.id].isFavorite = action.payload.status;
    });
});
