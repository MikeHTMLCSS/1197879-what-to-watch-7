import {chooseGenre} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  choosedGenre: false,
};

export const view = createReducer(initialState, (builder) => {
  builder
    .addCase(chooseGenre, (state, action) => {
      state.choosedGenre = action.payload;
    });
});
