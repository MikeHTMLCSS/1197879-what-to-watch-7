import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import Genre from '../genre/genre.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import {mainPropTypes} from './main-prop-types.jsx';
import {GENRES} from '../../consts.js';

function Main({films, headFilm}) {
  const [selectedMovie, setSelectedMovie] = useState(-1);
  const [movieCardTime, setMovieCardTime] = useState(false);
  setTimeout(() => {
    setMovieCardTime(true);
  }, 1000);
  return (
    <Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={`img/bg-${films[headFilm].posterSrc}.jpg`} alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <div className="logo">
            <Link to="#" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
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
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={`img/${films[headFilm].posterSrc}-poster.jpg`} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{films[headFilm].filmTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{films[headFilm].style}</span>
                <span className="film-card__year">{films[headFilm].date}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            {GENRES.map((genre) => <Genre key={genre} genre={genre} />)}
          </ul>
          <div className="catalog__films-list">
            {films.map((film, i) => <MovieCard key={film.movieTitle} i={i} movieTitle={film.movieTitle} posterSrc={film.posterSrc} movieCardTime={movieCardTime} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />)}
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <Link to="#" className="logo__link logo__link--light">
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
    </Fragment>
  );
}

Main.propTypes = mainPropTypes;

export default Main;
