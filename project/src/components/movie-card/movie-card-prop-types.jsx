import PropTypes from 'prop-types';

export const movieCardPropTypes = {
  i: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  posterSrc: PropTypes.string.isRequired,
  movieCardTime: PropTypes.bool.isRequired,
  selectedMovie: PropTypes.number.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};
