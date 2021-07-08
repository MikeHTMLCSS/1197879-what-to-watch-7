import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {myListPropTypes} from './my-list-prop-types';
import Header from '../header/header.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import {fetchMyFilmsList} from '../../services/api-actions.js';

function MyList({myFilms, getMyFilmsList}) {
  useEffect(() => {
    getMyFilmsList();
  }, [getMyFilmsList]);
  const [selectedMovie, setSelectedMovie] = useState(-1);
  return (
    <div className="user-page">
      <Header title={'My list'} modifierClass={'user-page__head'} />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <MovieList films={myFilms} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
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

const mapStateToProps = ({FILMS}) => ({
  myFilms: FILMS.myFilms,
});

const mapDispatchToProps = (dispatch) => ({
  getMyFilmsList() {
    dispatch(fetchMyFilmsList());
  },
});

export {MyList};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
