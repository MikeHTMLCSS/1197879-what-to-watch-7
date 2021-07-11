import {signIn, logoff, getFilmsList, getPromoFilm, chooseGenre, getMyFilmsList, getFilmsLikeThis, ActionType} from './action.js';

describe('Actions', () => {
  it('Actioncreator for signing in returns correct action', () => {
    const expectedAction = {
      type: ActionType.SIGN_IN,
    };
    expect(signIn()).toEqual(expectedAction);
  });
  it('Actioncreator for loging off returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOFF,
    };
    expect(logoff()).toEqual(expectedAction);
  });
  it('Actioncreator for getting films list returns correct action', () => {
    const expectedAction = {
      type: ActionType.GET_FILMS_LIST,
      payload: [
        {
          testData: 1,
        },
        {
          testData: 2,
        },
      ],
    };
    const films = [
      {
        testData: 1,
      },
      {
        testData: 2,
      },
    ];
    expect(getFilmsList(films)).toEqual(expectedAction);
  });
  it('Actioncreator for getting promo film returns correct action', () => {
    const expectedAction = {
      type: ActionType.GET_PROMO_FILM,
      payload: {
        testData: 1,
      },
    };
    const promoFilm = {
      testData: 1,
    };
    expect(getPromoFilm(promoFilm)).toEqual(expectedAction);
  });
  it('Actioncreator for choosing genre returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHOOSE_GENRE,
      payload: '',
    };
    const genre = '';
    expect(chooseGenre(genre)).toEqual(expectedAction);
  });
  it('Actioncreator for getting user`s favorite films list returns correct action', () => {
    const expectedAction = {
      type: ActionType.GET_MY_FILMS_LIST,
      payload: [
        {
          testData: 1,
        },
        {
          testData: 2,
        },
      ],
    };
    const myFilms = [
      {
        testData: 1,
      },
      {
        testData: 2,
      },
    ];
    expect(getMyFilmsList(myFilms)).toEqual(expectedAction);
  });
  it('ActionCreator for getting films like one of films', () => {
    const expectedAction = {
      type: ActionType.GET_FILMS_LIKE_THIS,
      payload: {
        id: 1,
        filmsLikeThis: [
          {
            testData: 1,
          },
          {
            testData: 2,
          },
        ],
      },
    };
    const id = 1;
    const filmsLikeThis = [
      {
        testData: 1,
      },
      {
        testData: 2,
      },
    ];
    expect(getFilmsLikeThis(filmsLikeThis, id)).toEqual(expectedAction);
  });
});
