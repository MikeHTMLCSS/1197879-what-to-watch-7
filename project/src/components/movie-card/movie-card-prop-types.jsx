import PropTypes from 'prop-types';

export const movieCardPropTypes = {
  i: PropTypes.number,
  movieTitle: PropTypes.string.isRequired,
  posterSrc: PropTypes.string.isRequired,
  setSelectedMovie: PropTypes.func,
};
