import PropTypes from 'prop-types';
import {moviePropTypesModel} from '../../prop-types/movie-prop-types-model.jsx';

export const mainPropTypes = {
  films: PropTypes.oneOfType([PropTypes.arrayOf(moviePropTypesModel), PropTypes.bool]).isRequired,
  promoFilm: PropTypes.oneOfType([moviePropTypesModel, PropTypes.bool]).isRequired,
};
