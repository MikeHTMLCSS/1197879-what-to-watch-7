import React, {useState, Fragment} from 'react';
import {connect} from 'react-redux';
import {useForm} from '../../hooks/use-form.js';
import {writeComment} from '../../services/api-actions/api-actions.js';
import {browserHistory} from '../../services/browser-history.js';
import {reviewFormPropTypes} from './review-form-prop-types.jsx';

function ReviewForm({sendComment, id}) {
  const [formData, handleChange] = useForm({
    rating: null,
    reviewText: '',
  });
  const [breakStatus, setBreakStatus] = useState(false);
  return (
    <form action="#" className="add-review__form" onSubmit={(event) => {
      event.preventDefault();
      sendComment(id, formData, () => browserHistory.push(`/films/${id - 1}`), () => setBreakStatus(true));
    }}
    >
      <div className="rating">
        <div className="rating__stars">
          {(() => {
            const ratingMarkup = [];
            for (let i = 0; i < 10; i++) {
              ratingMarkup.push((
                <Fragment key={i}>
                  <input className="rating__input" id={`star-${i + 1}`} type="radio" name="rating" value={`${i + 1}`} checked={parseInt(formData.rating, 10) === i + 1} onChange={handleChange} />
                  <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
                </Fragment>
              ));
            }
            return ratingMarkup;
          })()}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text" onChange={handleChange} value={formData.reviewText}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={formData.reviewText.length < 50 || !formData.rating}>Post</button>
        </div>
      </div>
      {breakStatus && <p>Bad Request(</p>}
    </form>
  );
}

ReviewForm.propTypes = reviewFormPropTypes;

const mapDispatchToProps = (dispatch) => ({
  sendComment(id, formData, redirect, fixBadRequest) {
    dispatch(writeComment(id, formData, redirect, fixBadRequest));
  },
});

export {ReviewForm};

export default connect(null, mapDispatchToProps)(ReviewForm);
