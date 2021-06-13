import React from 'react';
import {Link} from 'react-router-dom';
import ReviewForm from '../review-form/review-form.jsx';
import {addReviewPropTypes} from './add-review-prop-types.jsx';

function AddReview({films, history, location, match}) {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={`img/${films[match.params.id].posterSrc}.jpg`} alt={films[match.params.id].movieTitle} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${match.params.id}`} className="breadcrumbs__link">{films[match.params.id].movieTitle}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="#" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
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
        <div className="film-card__poster film-card__poster--small">
          <img src={`img/${films[match.params.id].posterSrc}.jpg`} alt={films[match.params.id].movieTitle} width="218" height="327" />
        </div>
      </div>
      <div className="add-review">
        <ReviewForm />
      </div>
    </section>
  );
}

AddReview.propTypes = addReviewPropTypes;

export default AddReview;
