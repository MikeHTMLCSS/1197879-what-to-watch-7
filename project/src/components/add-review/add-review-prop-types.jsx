import PropTypes from 'prop-types';
import {moviePropTypesModel} from '../../prop-types/movie-prop-types-model.jsx';

export const addReviewPropTypes = {
  films: PropTypes.oneOfType([PropTypes.arrayOf(moviePropTypesModel), PropTypes.bool]).isRequired,
};
