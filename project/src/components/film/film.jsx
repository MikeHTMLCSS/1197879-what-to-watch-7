import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header.jsx';
import {connect} from 'react-redux';
import {filmPropTypes} from './film-prop-types';
import Overview from '../overview/overview.jsx';
import Details from '../delails/details.jsx';
import Reviews from '../reviews/reviews.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import MyButton from '../my-button/my-button.jsx';
import {FilmPages, AuthorizationStatus} from '../../consts.js';
import {getAuthorizationStatus} from '../../store/reducer/user/selectors.js';
import {getFilms, getLikeThis, getReply} from '../../store/reducer/films/selectors.js';
import {fetchFilmsLikeThis, fetchComments} from '../../services/api-actions/api-actions.js';
import {browserHistory} from '../../services/browser-history.js';

function Film({authorizationStatus, films, likeThis, reply, getFilmsLikeThis, getComments, match}) {
  useEffect(() => {
    if (films) {
      getFilmsLikeThis(parseInt(match.params.id, 10) + 1);
    }
  }, [getFilmsLikeThis, films, match.params.id]);
  useEffect(() => {
    if (films) {
      getComments(parseInt(match.params.id, 10) + 1);
    }
  }, [getComments, films, match.params.id]);
  const [selectedPage, setSelectedPage] = useState(FilmPages.OVERVIEW);
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
                  <button onClick={() => browserHistory.push(`/player/${match.params.id}`)} className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  {authorizationStatus === AuthorizationStatus.AUTH && <MyButton id={match.params.id} isFavorite={films[match.params.id].isFavorite} />}
                  {authorizationStatus === AuthorizationStatus.AUTH && <Link to={`/films/${match.params.id}/review`} className="btn film-card__button">Add review</Link>}
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
                    <li className={`film-nav__item${(selectedPage === FilmPages.OVERVIEW) ? ' film-nav__item--active' : ''}`}>
                      <Link to="#" className="film-nav__link" onClick={() => setSelectedPage(FilmPages.OVERVIEW)}>Overview</Link>
                    </li>
                    <li className={`film-nav__item${(selectedPage === FilmPages.DETAILS) ? ' film-nav__item--active' : ''}`}>
                      <Link to="#" className="film-nav__link" onClick={() => setSelectedPage(FilmPages.DETAILS)}>Details</Link>
                    </li>
                    <li className={`film-nav__item${(selectedPage === FilmPages.REVIEWS) ? ' film-nav__item--active' : ''}`}>
                      <Link to="#" className="film-nav__link" onClick={() => setSelectedPage(FilmPages.REVIEWS)}>Reviews</Link>
                    </li>
                  </ul>
                </nav>
                {selectedPage === FilmPages.OVERVIEW && <Overview film={films[match.params.id]} />}
                {selectedPage === FilmPages.DETAILS && <Details film={films[match.params.id]} />}
                {selectedPage === FilmPages.REVIEWS && <Reviews reply={reply} />}
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
              {(likeThis.id === parseInt(match.params.id, 10) + 1) && <MovieList films={likeThis.films} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />}
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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  films: getFilms(state),
  likeThis: getLikeThis(state),
  reply: getReply(state),
});

const mapDispatchToProps = (dispatch) => ({
  getFilmsLikeThis(id) {
    dispatch(fetchFilmsLikeThis(id));
  },
  getComments(id) {
    dispatch(fetchComments(id));
  },
});

export {Film};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
