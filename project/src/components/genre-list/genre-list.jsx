import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import Genre from '../genre/genre.jsx';
import {Genres} from '../../consts.js';
import {ActionCreator} from '../../store/action.js';
import {genreListPropTypes} from './genre-list-prop-types.jsx';

function GenreList({chooseGenre}) {
  return (
    <Fragment>
      <Genre genre={Genres.ALL_GENRES} chooseGenre={() => chooseGenre(false)} />
      {Genres.GENRES.map((genre) => <Genre key={genre} genre={genre} chooseGenre={() => chooseGenre(genre)} />)}
    </Fragment>
  );
}

GenreList.propTypes = genreListPropTypes;

const mapDispatchToProps = (dispatch) => ({
  chooseGenre(genre) {
    dispatch(ActionCreator.chooseGenre(genre));
  },
});

export {GenreList};

export default connect(null, mapDispatchToProps)(GenreList);
