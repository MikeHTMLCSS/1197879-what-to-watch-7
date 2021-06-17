import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {myListPropTypes} from './my-list-prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

function MyList({films, myFilms}) {
  const [selectedMovie, setSelectedMovie] = useState(-1);
  const [movieCardTime, setMovieCardTime] = useState(false);
  setTimeout(() => {
    setMovieCardTime(true);
  }, 1000);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <h1 className="page-title user-page__title">My list</h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to="/login" className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {films.map((film, i) => ((myFilms.indexOf(i) !== -1) && <MovieCard key={film.movieTitle} i={i} movieTitle={film.movieTitle} posterSrc={film.posterSrc} movieCardTime={movieCardTime} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />))}
        </div>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

MyList.propTypes = myListPropTypes;

export default MyList;
