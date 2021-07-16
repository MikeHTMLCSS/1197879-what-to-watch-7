import PropTypes from 'prop-types';
import {moviePropTypesModel} from '../../prop-types/movie-prop-types-model.jsx';

export const filmPropTypes = {
  films: PropTypes.oneOfType([PropTypes.arrayOf(moviePropTypesModel), PropTypes.bool]).isRequired,
  likeThis: PropTypes.shape({
    films: PropTypes.oneOfType([PropTypes.arrayOf(moviePropTypesModel), PropTypes.bool]),
    id: PropTypes.number,
  }).isRequired,
  getFilmsLikeThis: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};
