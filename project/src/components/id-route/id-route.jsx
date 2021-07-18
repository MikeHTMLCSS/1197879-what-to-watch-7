import React from 'react';
import {connect} from 'react-redux';
import NotFound from '../not-found/not-found';
import {idRoutePropTypes} from './id-route-prop-types.jsx';

function IdRoute({films, render, match}) {
  if (films[match.params.id]) {
    return render({match});
  } else {
    return <NotFound />;
  }
}

IdRoute.propTypes = idRoutePropTypes;

const mapStateToProps = ({FILMS}) => ({
  films: FILMS.films,
});

export {IdRoute};

export default connect(mapStateToProps)(IdRoute);
