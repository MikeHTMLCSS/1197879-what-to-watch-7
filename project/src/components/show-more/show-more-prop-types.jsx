import PropTypes from 'prop-types';

export const showMorePropTypes = {
  showedFilmsNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  changeShowedFilmsNumber: PropTypes.func.isRequired,
};
