import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../header/header.jsx';
import ReviewForm from '../review-form/review-form.jsx';
import {getFilms} from '../../store/reducer/films/selectors.js';
import {addReviewPropTypes} from './add-review-prop-types.jsx';

function AddReview({films, match}) {
  return (
    <section className="film-card film-card--full">
      {
        films &&
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={films[match.params.id].backgroundSrc} alt={films[match.params.id].title} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header modifierClass="">
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${match.params.id}`} className="breadcrumbs__link">{films[match.params.id].title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link to="#" className="breadcrumbs__link">Add review</Link>
                </li>
              </ul>
            </nav>
          </Header>
          <div className="film-card__poster film-card__poster--small">
            <img src={films[match.params.id].posterSrc} alt={films[match.params.id].title} width="218" height="327" />
          </div>
        </div>
      }
      {
        films &&
        <div className="add-review">
          <ReviewForm id={films[match.params.id].id} />
        </div>
      }
    </section>
  );
}

AddReview.propTypes = addReviewPropTypes;

const mapStateToProps = (state) => ({
  films: getFilms(state),
});

export {AddReview};

export default connect(mapStateToProps)(AddReview);
