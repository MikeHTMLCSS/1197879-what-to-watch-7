import PropTypes from 'prop-types';
import {moviePropTypesModel} from '../../prop-types/movie-prop-types-model.jsx';

export const MovieListPropTypes = {
  films: PropTypes.oneOfType([PropTypes.arrayOf(moviePropTypesModel), PropTypes.bool]).isRequired,
  showedFilmsNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  choosedGenre: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  isGenre: PropTypes.bool,
  selectedMovie: PropTypes.number.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};
