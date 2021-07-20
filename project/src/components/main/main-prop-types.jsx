import PropTypes from 'prop-types';
import {moviePropTypesModel} from '../../prop-types/movie-prop-types-model.jsx';

export const mainPropTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  films: PropTypes.oneOfType([PropTypes.arrayOf(moviePropTypesModel), PropTypes.bool]).isRequired,
  promoFilm: PropTypes.oneOfType([moviePropTypesModel, PropTypes.bool]).isRequired,
  findPromoFilm: PropTypes.func.isRequired,
  changeShowedFilmsNumber: PropTypes.func.isRequired,
  showedFilmsNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  choosedGenre: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};
