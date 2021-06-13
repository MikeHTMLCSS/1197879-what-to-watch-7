import PropTypes from 'prop-types';
import {movieCardPropTypes} from '../movie-card/movie-card-prop-types.jsx';

export const myListPropTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(movieCardPropTypes)).isRequired,
  myFilms: PropTypes.arrayOf(PropTypes.number).isRequired,
};
