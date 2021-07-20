import React from 'react';
import {connect} from 'react-redux';
import NotFound from '../not-found/not-found';
import {getFilms} from '../../store/reducer/films/selectors';
import {idRoutePropTypes} from './id-route-prop-types.jsx';

function IdRoute({films, render, match}) {
  if (films[match.params.id]) {
    return render({match});
  } else {
    return <NotFound />;
  }
}

IdRoute.propTypes = idRoutePropTypes;

const mapStateToProps = (state) => ({
  films: getFilms(state),
});

export {IdRoute};

export default connect(mapStateToProps)(IdRoute);
