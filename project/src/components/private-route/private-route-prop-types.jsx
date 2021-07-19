import PropTypes from 'prop-types';

export const privateRoutePropTypes = {
  isInvert: PropTypes.bool,
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};
