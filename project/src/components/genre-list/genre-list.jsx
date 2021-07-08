import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import Genre from '../genre/genre.jsx';
import {Genres} from '../../consts.js';
import {chooseGenre} from '../../store/action.js';
import {genreListPropTypes} from './genre-list-prop-types.jsx';

function GenreList({changeGenre}) {
  return (
    <Fragment>
      <Genre genre={Genres.ALL_GENRES} chooseGenre={() => changeGenre(false)} />
      {Genres.GENRES.map((genre) => <Genre key={genre} genre={genre} chooseGenre={() => changeGenre(genre)} />)}
    </Fragment>
  );
}

GenreList.propTypes = genreListPropTypes;

const mapDispatchToProps = (dispatch) => ({
  chooseGenre(genre) {
    dispatch(chooseGenre(genre));
  },
});

export {GenreList};

export default connect(null, mapDispatchToProps)(GenreList);
