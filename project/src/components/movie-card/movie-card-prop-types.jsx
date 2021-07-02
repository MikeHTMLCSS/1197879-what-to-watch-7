import PropTypes from 'prop-types';

export const movieCardPropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  previewVideoSrc: PropTypes.string.isRequired,
  previewSrc: PropTypes.string.isRequired,
  selectedMovie: PropTypes.number.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};
