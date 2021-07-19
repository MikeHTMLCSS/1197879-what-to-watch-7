import PropTypes from 'prop-types';

export const genrePropTypes = {
  genre: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  chooseGenre: PropTypes.func.isRequired,
  hideFilms: PropTypes.func.isRequired,
  choosedGenre: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};
