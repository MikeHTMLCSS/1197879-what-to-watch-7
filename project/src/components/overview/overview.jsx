import React, {Fragment} from 'react';
import {overviewPropTypes} from './overview-prop-types.jsx';
import {RATING_SCALE} from '../../consts.js';

function Overview({film}) {
  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {(() => {
              let ratingType = '';
              RATING_SCALE.forEach((ratingLevel) => {
                if (ratingLevel.value <= film.rating) {
                  ratingType = ratingLevel.type;
                }
              });
              return ratingType;
            })()}
          </span>
          <span className="film-rating__count">{film.scores_count} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film.stars.map((role) => `${role}, `)}</strong></p>
      </div>
    </Fragment>
  );
}

Overview.propTypes = overviewPropTypes;

export default Overview;
