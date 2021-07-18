import PropTypes from 'prop-types';
import {moviePropTypesModel} from '../../prop-types/movie-prop-types-model.jsx';

export const filmPropTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  films: PropTypes.oneOfType([PropTypes.arrayOf(moviePropTypesModel), PropTypes.bool]).isRequired,
  likeThis: PropTypes.shape({
    films: PropTypes.oneOfType([PropTypes.arrayOf(moviePropTypesModel), PropTypes.bool]),
    id: PropTypes.number,
  }).isRequired,
  reply: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    rating: PropTypes.number,
    comment: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  getFilmsLikeThis: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
};
