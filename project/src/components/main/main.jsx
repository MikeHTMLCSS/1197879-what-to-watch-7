import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../header/header.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import {mainPropTypes} from './main-prop-types.jsx';
import {fetchPromoFilm} from '../../services/api-actions/api-actions.js';

function Main({films, promoFilm, getPromoFilm}) {
  useEffect(() => {
    getPromoFilm();
  }, [getPromoFilm]);
  const [selectedMovie, setSelectedMovie] = useState(-1);
  return (
    <Fragment>
      <section className="film-card">
        {
          promoFilm &&
          <div className="film-card__bg">
            <img src={promoFilm.backgroundSrc} alt="The Grand Budapest Hotel" />
          </div>
        }
        <h1 className="visually-hidden">WTW</h1>
        <Header modifierClass={'film-card__head'} />
        {
          promoFilm &&
          <div className="film-card__wrap">
            <div className="film-card__info">
              <div className="film-card__poster">
                <img src={promoFilm.posterSrc} alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>
              <div className="film-card__desc">
                <h2 className="film-card__title">{promoFilm.title}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{promoFilm.genre}</span>
                  <span className="film-card__year">{promoFilm.released}</span>
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
        }
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <GenreList />
          </ul>
          <div className="catalog__films-list">
            <MovieList films={films} isGenre selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
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

const mapStateToProps = ({FILMS}) => ({
  films: FILMS.films,
  promoFilm: FILMS.promoFilm,
});

const mapDispatchToProps = (dispatch) => ({
  getPromoFilm() {
    dispatch(fetchPromoFilm());
  },
});

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
