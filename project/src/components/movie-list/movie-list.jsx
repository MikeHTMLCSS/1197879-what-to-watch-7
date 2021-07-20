import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import MovieCard from '../movie-card/movie-card';
import Loading from '../loading/loading.jsx';
import {getChoosedGenre, getShowedFilmsNumber} from '../../store/reducer/view/selectors';
import {MovieListPropTypes} from '../movie-list/movie-list-prop-types';

function MovieList({films, showedFilmsNumber, choosedGenre, isGenre = false, selectedMovie, setSelectedMovie}) {
  if (films) {
    let movies = [];
    if (choosedGenre && isGenre) {
      films.forEach((film) => {
        if (film.genre === choosedGenre) {
          movies.push(film);
        }
      });
    } else {
      movies = films;
    }
    let filmsNumber = movies.length;
    if (showedFilmsNumber && showedFilmsNumber < movies.length && isGenre) {
      filmsNumber = showedFilmsNumber;
    }
    return (
      <Fragment>
        {movies.slice(0, filmsNumber).map((film) => <MovieCard key={film.title} id={film.id - 1} title={film.title} previewSrc={film.previewSrc} previewVideoSrc={film.previewVideoSrc} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />)}
      </Fragment>
    );
  }
  return <Loading />;
}

MovieList.propTypes = MovieListPropTypes;

const mapStateToProps = (state) => ({
  choosedGenre: getChoosedGenre(state),
  showedFilmsNumber: getShowedFilmsNumber(state),
});

export {MovieList};

export default connect(mapStateToProps)(MovieList);
