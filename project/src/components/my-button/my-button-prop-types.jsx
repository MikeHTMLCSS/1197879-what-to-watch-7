import PropTypes from 'prop-types';

export const myButtonPropTypes = {
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  postIsFavorite: PropTypes.func.isRequired,
  updatePromo: PropTypes.func,
};
