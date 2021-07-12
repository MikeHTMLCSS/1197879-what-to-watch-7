import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header.jsx';
import {connect} from 'react-redux';
import {filmPropTypes} from './film-prop-types';
import MovieList from '../movie-list/movie-list.jsx';
import {RATING_SCALE} from '../../consts.js';
import {fetchFilmsLikeThis} from '../../services/api-actions/api-actions.js';

function Film({films, likeThis, getFilmsLikeThis, history, location, match}) {
  let id = null;
  if (films) {
    id = films[match.params.id].id;
  }
  useEffect(() => {
    if (films) {
      getFilmsLikeThis(id);
    }
  }, [getFilmsLikeThis, films, id]);
  const [selectedMovie, setSelectedMovie] = useState(-1);
  return (
    <Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          {
            films &&
            <div className="film-card__bg">
              <img src={films[match.params.id].backgroundSrc} alt={films[match.params.id].name} />
            </div>
          }
          <h1 className="visually-hidden">WTW</h1>
          <Header modifierClass={'film-card__head'} />
          {
            films &&
            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{films[match.params.id].name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{films[match.params.id].genre}</span>
                  <span className="film-card__year">{films[match.params.id].released}</span>
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
          }
        </div>
        <div className="film-card__wrap film-card__translate-top">
          {
            films &&
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={films[match.params.id].posterSrc} alt={films[match.params.id].name} width="218" height="327" />
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
                        RATING_SCALE.forEach((ratingLevel) => {
                          if (ratingLevel.value <= films[match.params.id].rating) {
                            ratingType = ratingLevel.type;
                          }
                        });
                        return ratingType;
                      })()}
                    </span>
                    <span className="film-rating__count">{films[match.params.id].scores_count} ratings</span>
                  </p>
                </div>
                <div className="film-card__text">
                  <p>{films[match.params.id].description}</p>
                  <p className="film-card__director"><strong>Director: {films[match.params.id].director}</strong></p>
                  <p className="film-card__starring"><strong>Starring: {films[match.params.id].stars.map((role) => `${role}, `)}</strong></p>
                </div>
              </div>
            </div>
          }
        </div>
      </section>
      <div className="page-content">
        {
          films &&
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <div className="catalog__films-list">
              {(likeThis.id === films[match.params.id].id) && <MovieList films={likeThis.films} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />}
            </div>
          </section>
        }
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

const mapStateToProps = ({FILMS}) => ({
  films: FILMS.films,
  likeThis: FILMS.likeThis,
});

const mapDispatchToProps = (dispatch) => ({
  getFilmsLikeThis(id) {
    dispatch(fetchFilmsLikeThis(id));
  },
});

export {Film};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
