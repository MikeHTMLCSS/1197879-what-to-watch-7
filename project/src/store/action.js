export const ActionType = {
  CHOOSE_GENRE: 'filmLlist/chooseGenre',
};

export const ActionCreator = {
  chooseGenre: (genre) => ({
    type: ActionType.CHOOSE_GENRE,
    genre: genre,
  }),
};
