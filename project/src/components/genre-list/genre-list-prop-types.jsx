import PropTypes from 'prop-types';

export const genreListPropTypes = {
  changeGenre: PropTypes.func.isRequired,
  changeShowedFilmsNumber: PropTypes.func.isRequired,
  genres: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.bool]).isRequired,
};
