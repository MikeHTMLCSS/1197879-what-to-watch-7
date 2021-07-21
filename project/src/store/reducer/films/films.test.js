import {films} from './films';
import {getFilmsList, getPromoFilm, getMyFilmsList, getFilmsLikeThis, getComments} from '../../action/action.js';
import {adaptFilm} from './adapt-film.js';

describe('Reducer for films', () => {
  it('Should get films list', () => {
    const state = {
      films: false,
    };
    const filmsList = [
      {
        testData: 1,
      },
    ];
    expect(films(state, getFilmsList(filmsList))).toEqual({
      films: filmsList.map((film) => adaptFilm(film)),
    });
  });
  it('Should get promo film', () => {
    let state = {
      promoFilm: false,
    };
    let promoFilm = {
      test: 1,
    };
    expect(films(state, getPromoFilm(promoFilm))).toEqual({
      promoFilm: adaptFilm(promoFilm),
    });
    state = {
      promoFilm: adaptFilm({
        test: 1,
      }),
    };
    promoFilm = {
      test: 2,
    };
    expect(films(state, getPromoFilm(promoFilm))).toEqual({
      promoFilm: adaptFilm(promoFilm),
    });
  });
  it('Should get user`s favorite films list', () => {
    let state = {
      myFilms: false,
    };
    let myFilms = [
      {
        testData: 1,
      },
    ];
    expect(films(state, getMyFilmsList(myFilms))).toEqual({
      myFilms: myFilms.map((myFilm) => adaptFilm(myFilm)),
    });
    state = {
      myFilms: adaptFilm({
        test: 1,
      }),
    };
    myFilms = [
      {
        testData: 1,
      },
    ];
    expect(films(state, getMyFilmsList(myFilms))).toEqual({
      myFilms: myFilms.map((myFilm) => adaptFilm(myFilm)),
    });
  });
  it('Should get films like one of films', () => {
    let state = {
      likeThis: {
        films: false,
        id: -1,
      },
    };
    let filmsLikeThis = [
      {
        testData: 1,
      },
    ];
    let id = 1;
    expect(films(state, getFilmsLikeThis(filmsLikeThis, id))).toEqual({
      likeThis: {
        films: filmsLikeThis.map((filmLikeThis) => adaptFilm(filmLikeThis)),
        id: 1,
      },
    });
    state = {
      likeThis: {
        films: [
          adaptFilm({
            testData: 1,
          }),
        ],
        id: 1,
      },
    };
    filmsLikeThis = [
      {
        testData: 2,
      },
    ];
    id = 2;
    expect(films(state, getFilmsLikeThis(filmsLikeThis, id))).toEqual({
      likeThis: {
        films: filmsLikeThis.map((filmLikeThis) => adaptFilm(filmLikeThis)),
        id: 2,
      },
    });
  });
  it('Should get comments to one of films', () => {
    let state = {
      reply: {
        comments: false,
        is: -1,
      },
    };
    let comments = [{testData: 1}];
    let id = 1;
    expect(films(state, getComments(comments, id))).toEqual({
      reply: {
        comments: [{testData: 1}],
        id: 1,
      },
    });
    state = {
      reply: {
        comments: [{testData: 1}],
        is: 1,
      },
    };
    comments = [{testData: 2}];
    id = 2;
    expect(films(state, getComments(comments, id))).toEqual({
      reply: {
        comments: [{testData: 2}],
        id: 2,
      },
    });
  });
});
