import {ActionType} from './action.js';

const initialState = {
  choosedGenre: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_GENRE:
      return {
        ...state,
        choosedGenre: action.genre,
      };
    default:
      return state;
  }
};

export {reducer};
