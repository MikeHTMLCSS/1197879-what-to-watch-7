import PropTypes from 'prop-types';

export const myListPropTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    posterSrc: PropTypes.string,
    movieTitle: PropTypes.string,
    style: PropTypes.string,
    date: PropTypes.string,
    duration: PropTypes.string,
    rating: PropTypes.number,
    ratingNumber: PropTypes.number,
    description: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.string,
    likeThis: PropTypes.arrayOf(PropTypes.number),
  })).isRequired,
  myFilms: PropTypes.arrayOf(PropTypes.number).isRequired,
};