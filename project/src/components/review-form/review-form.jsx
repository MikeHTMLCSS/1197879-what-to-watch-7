import React, {Fragment, useState} from 'react';

function ReviewForm() {
  const [formData, setFormData] = useState({
    rating: null,
    reviewText: '',
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <form action="#" className="add-review__form">
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
          <button className="add-review__btn" type="button">Post</button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
