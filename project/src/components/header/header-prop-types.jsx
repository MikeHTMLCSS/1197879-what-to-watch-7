import PropTypes from 'prop-types';

export const headerPropTypes = {
  title: PropTypes.string,
  modifierClass: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  logoff: PropTypes.func.isRequired,
};
