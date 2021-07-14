import PropTypes from 'prop-types';

export const overviewPropTypes = {
  film: PropTypes.shape({
    index: PropTypes.number,
    title: PropTypes.string,
    posterSrc: PropTypes.string,
    previewSrc: PropTypes.string,
    backgroundSrc: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoSrc: PropTypes.string,
    previewVideoSrc: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    ratingNumber: PropTypes.number,
    director: PropTypes.string,
    stars: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  }).isRequired,
};
