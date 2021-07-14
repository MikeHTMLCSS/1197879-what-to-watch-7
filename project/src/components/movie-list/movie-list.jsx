import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import MovieCard from '../movie-card/movie-card';
import Loading from '../loading/loading.jsx';
import {MovieListPropTypes} from '../movie-list/movie-list-prop-types';

function MovieList({films, showedFilmsNumber = false, choosedGenre, isGenre = false, selectedMovie, setSelectedMovie}) {
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
    let filmsNumber = films.length;
    if (showedFilmsNumber) {
      if (showedFilmsNumber < films.length) {
        filmsNumber = showedFilmsNumber;
      } else {
        filmsNumber = films.length;
      }
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

const mapStateToProps = ({VIEW}) => ({
  choosedGenre: VIEW.choosedGenre,
});

export {MovieList};

export default connect(mapStateToProps)(MovieList);
