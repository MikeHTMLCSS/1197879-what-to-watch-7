import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
function App({films, header}) {
  return (
    <Main films={films} header={header} />
  );
}
App.propTypes = {
  films: PropTypes.arrayOf({
    movieTitle: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  header: {
    filmTitle: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  },
};
export default App;
