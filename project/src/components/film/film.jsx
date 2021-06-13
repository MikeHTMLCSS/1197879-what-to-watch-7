import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {filmPropTypes} from './film-prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

function Film({films, ratingScale, history, location, match}) {
  // По заданию нужно создать хук. но он пока не используется
  // eslint-disable-next-line no-unused-vars
  const [selectedMovie, setSelectedMovie] = useState(-1);
  return (
    <Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={`img/bg-${films[match.params.id].posterSrc}.jpg`} alt={films[match.params.id].movieTitle} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
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
            <div className="film-card__desc">
              <h2 className="film-card__title">{films[match.params.id].movieTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{films[match.params.id].style}</span>
                <span className="film-card__year">{films[match.params.id].date}</span>
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
                <Link to={`/films/${match.params.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={`img/${films[match.params.id].posterSrc}-poster.jpg`} alt={films[match.params.id].movieTitle} width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <Link to="#" className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="#" className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="#" className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>
              <div className="film-rating">
                <div className="film-rating__score">{films[match.params.id].rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">
                    {(() => {
                      let ratingType = '';
                      ratingScale.forEach((ratingLevel) => {
                        if (ratingLevel.value <= films[match.params.id].rating) {
                          ratingType = ratingLevel.type;
                        }
                      });
                      return ratingType;
                    })()}
                  </span>
                  <span className="film-rating__count">{films[match.params.id].ratingNumber} ratings</span>
                </p>
              </div>
              <div className="film-card__text">
                <p>{films[match.params.id].description}</p>
                <p className="film-card__director"><strong>Director: {films[match.params.id].director}</strong></p>
                <p className="film-card__starring"><strong>Starring: {films[match.params.id].starring}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {films.map((film, i) => ((films[match.params.id].likeThis.indexOf(i) !== -1) && <MovieCard key={film.movieTitle} i={i} movieTitle={film.movieTitle} posterSrc={film.posterSrc} setSelectedMovie={setSelectedMovie} />))}
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
    </Fragment>
  );
}

Film.propTypes = filmPropTypes;

export default Film;
