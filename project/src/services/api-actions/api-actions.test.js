/* eslint-disable no-unused-vars */
import MockAdapter from 'axios-mock-adapter';
import {checkAuth, fetchFilmsList, fetchPromoFilm, fetchMyFilmsList, fetchFilmsLikeThis} from './api-actions.js';
import {createAPI} from '../api.js';
import {signIn, logoff, getFilmsList, getPromoFilm, getMyFilmsList, getFilmsLikeThis} from '../../store/action/action.js';
import {APIRoute} from '../../consts.js';

let api = null;

describe('Asynchronous operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });
  it('Should GET /login successfully', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthAction = checkAuth();
    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200);
    return checkAuthAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(signIn());
      });
  });
  it('Should GET /login unsuccessfully', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthAction = checkAuth();
    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(401);
    return checkAuthAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(logoff());
      });
  });
  it('Should GET /films', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthAction = fetchFilmsList();
    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [{testData: 1}]);
    return checkAuthAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(getFilmsList([{testData: 1}]));
      });
  });
});
