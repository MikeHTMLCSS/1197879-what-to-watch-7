import React from 'react';
import Loading from '../loading/loading.jsx';
import {reviewPropTypes} from './review-prop-types.jsx';
import moment from 'moment';

function Review({reply}) {
  if (reply.comments) {
    let cols;
    if (reply.comments.length % 2) {
      cols = [
        {
          comments: reply.comments.slice(0, Math.floor((reply.comments.length - 1) / 2) + 1),
          key: 0,
        },
        {
          comments: reply.comments.slice(Math.floor((reply.comments.length - 1) / 2) + 1, reply.comments.length),
          key: 1,
        },
      ];
    } else {
      cols = [
        {
          comments: reply.comments.slice(0, Math.floor(reply.comments.length / 2)),
          key: 0,
        },
        {
          comments: reply.comments.slice(Math.floor(reply.comments.length / 2), reply.comments.length),
          key: 1,
        },
      ];
    }
    return (
      <div className="film-card__reviews film-card__row">
        {cols.map((col) => (
          <div key={col.key} className="film-card__reviews-col">
            {col.comments.map((comment) => (
              <div key={comment.id} className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{comment.comment}</p>
                  <footer className="review__details">
                    <cite className="review__author">{comment.user.name}</cite>
                    {(() => <time className="review__date" dateTime={moment(comment.date).format('YYYY-MM-DD')}>{moment(comment.date).format('MMMM DD, YYYY')}</time>)()}
                  </footer>
                </blockquote>
                <div className="review__rating">{comment.rating}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  } else {
    return <Loading />;
  }
}

Review.propTypes = reviewPropTypes;

export default Review;
