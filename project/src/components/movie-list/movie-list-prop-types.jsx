import PropTypes from 'prop-types';

export const MovieListPropTypes = {
  films: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({
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
  })), PropTypes.bool]).isRequired,
  choosedGenre: PropTypes.any.isRequired,
  isGenre: PropTypes.bool,
  selectedMovie: PropTypes.number.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};
