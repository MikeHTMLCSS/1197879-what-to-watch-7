import {view} from './view.js';
import {chooseGenre} from '../../action/action.js';

describe('Reducer for view', () => {
  it('Should change genre', () => {
    let state = {
      choosedGenre: false,
    };
    expect(view(state, chooseGenre('Documentary'))).toEqual({
      choosedGenre: 'Documentary',
    });
    state = {
      choosedGenre: 'Drama',
    };
    expect(view(state, chooseGenre('Comedy'))).toEqual({
      choosedGenre: 'Comedy',
    });
  });
});
