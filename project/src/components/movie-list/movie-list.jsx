import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import MovieCard from '../movie-card/movie-card';
import {MovieListPropTypes} from '../movie-list/movie-list-prop-types';

function MovieList({films, selectedMovie, setSelectedMovie, filmNumbers = null, choosedGenre}) {
  let movies = [];
  if (filmNumbers) {
    filmNumbers.forEach((filmNumber) => {
      movies.push(films[filmNumber]);
    });
  } else {
    if (choosedGenre) {
      films.forEach((film) => {
        if (film.style === choosedGenre) {
          movies.push(film);
        }
      });
    } else {
      movies = films;
    }
  }
  return (
    <Fragment>
      {movies.map((film, i) => <MovieCard key={film.movieTitle} i={i} movieTitle={film.movieTitle} posterSrc={film.posterSrc} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />)}
    </Fragment>
  );
}

MovieList.propTypes = MovieListPropTypes;

const mapStateToProps = (state) => ({
  choosedGenre: state.choosedGenre,
});

export {MovieList};
export default connect(mapStateToProps)(MovieList);
