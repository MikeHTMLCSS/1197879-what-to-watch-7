import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import Genre from '../genre/genre.jsx';
import {chooseGenre} from '../../store/action/action.js';
import {setShowedFilmsNumber} from '../../store/action/action.js';
import {genreListPropTypes} from './genre-list-prop-types.jsx';
import {SHOW_FILMS_NUMBER} from '../../consts.js';

function GenreList({changeGenre, changeShowedFilmsNumber, genres}) {
  return (
    <Fragment>
      <Genre genre={false} chooseGenre={() => changeGenre(false)} hideFilms={() => changeShowedFilmsNumber(SHOW_FILMS_NUMBER)} />
      {genres && genres.map((genre) => <Genre key={genre} genre={genre} chooseGenre={() => changeGenre(genre)} hideFilms={() => changeShowedFilmsNumber(SHOW_FILMS_NUMBER)} />)}
    </Fragment>
  );
}

GenreList.propTypes = genreListPropTypes;

const mapStateToProps = ({FILMS}) => ({
  genres: FILMS.genres,
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(chooseGenre(genre));
  },
  changeShowedFilmsNumber(number) {
    dispatch(setShowedFilmsNumber(number));
  },
});

export {GenreList};

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
