export const findGenres = (films) => {
  if (films) {
    const genres = [];
    films.forEach(({genre}) => {
      if (genres.indexOf(genre) === -1) {
        genres.push(genre);
      }
    });
    return genres;
  } else {
    return false;
  }
};
