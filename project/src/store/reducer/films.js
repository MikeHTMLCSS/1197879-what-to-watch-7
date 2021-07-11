import {getFilmsList, getPromoFilm, getMyFilmsList, getFilmsLikeThis} from '../action/action.js';
import {adaptFilm} from '../adapter.js';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  films: false,
  promoFilm: false,
  myFilms: false,
  likeThis: {
    films: false,
    id: -1,
  },
};

export const films = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilmsList, (state, action) => {
      state.films = action.payload.map((film) => adaptFilm(film));
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
    });
});
