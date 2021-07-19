export const getGenres = (films) => {
  const genres = [];
  films.forEach(({genre}) => {
    if (genres.indexOf(genre) === -1) {
      genres.push(genre);
    }
  });
  return genres;
};
