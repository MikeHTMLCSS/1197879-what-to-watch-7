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
  const [isFormSended, setIsFormSended] = useState(false);
  return (
    <form action="#" className="add-review__form" onSubmit={(event) => {
      event.preventDefault();
      sendComment(id, formData, () => browserHistory.push(`/films/${id - 1}`), () => {
        setBreakStatus(true);
        setIsFormSended(false);
      });
      setIsFormSended(true);
    }}
    >
      <div className="rating">
        <div className="rating__stars">
          {(new Array(10)).fill(null).map((number, i) => (
            <Fragment key={Math.random()}>
              <input className="rating__input" id={`star-${10 - i}`} type="radio" name="rating" value={`${10 - i}`} checked={parseInt(formData.rating, 10) === 10 - i} onChange={handleChange} />
              <label className="rating__label" htmlFor={`star-${10 - i}`}>Rating {10 - i}</label>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text" onChange={handleChange} value={formData.reviewText}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={formData.reviewText.length < 50 || formData.reviewText.length > 400 || !formData.rating || isFormSended}>Post</button>
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
