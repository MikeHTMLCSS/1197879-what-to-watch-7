import {chooseGenre, setShowedFilmsNumber} from '../../action/action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  choosedGenre: false,
  showedFilmsNumber: false,
};

export const view = createReducer(initialState, (builder) => {
  builder
    .addCase(chooseGenre, (state, action) => {
      state.choosedGenre = action.payload;
    })
    .addCase(setShowedFilmsNumber, (state, action) => {
      state.showedFilmsNumber = action.payload;
    });
});
