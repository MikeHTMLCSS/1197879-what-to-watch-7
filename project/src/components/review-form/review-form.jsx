import React from 'react';
import {useState} from 'react';

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
          <input className="rating__input" id="star-10" type="radio" name="rating" value="10" checked={parseInt(formData.rating, 10) === 10} onChange={handleChange} />
          <label className="rating__label" htmlFor="star-10">Rating 10</label>
          <input className="rating__input" id="star-9" type="radio" name="rating" value="9" checked={parseInt(formData.rating, 10) === 9} onChange={handleChange} />
          <label className="rating__label" htmlFor="star-9">Rating 9</label>
          <input className="rating__input" id="star-8" type="radio" name="rating" value="8" checked={parseInt(formData.rating, 10) === 8} onChange={handleChange} />
          <label className="rating__label" htmlFor="star-8">Rating 8</label>
          <input className="rating__input" id="star-7" type="radio" name="rating" value="7" checked={parseInt(formData.rating, 10) === 7} onChange={handleChange} />
          <label className="rating__label" htmlFor="star-7">Rating 7</label>
          <input className="rating__input" id="star-6" type="radio" name="rating" value="6" checked={parseInt(formData.rating, 10) === 6} onChange={handleChange} />
          <label className="rating__label" htmlFor="star-6">Rating 6</label>
          <input className="rating__input" id="star-5" type="radio" name="rating" value="5" checked={parseInt(formData.rating, 10) === 5} onChange={handleChange} />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>
          <input className="rating__input" id="star-4" type="radio" name="rating" value="4" checked={parseInt(formData.rating, 10) === 4} onChange={handleChange} />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>
          <input className="rating__input" id="star-3" type="radio" name="rating" value="3" checked={parseInt(formData.rating, 10) === 3} onChange={handleChange} />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>
          <input className="rating__input" id="star-2" type="radio" name="rating" value="2" checked={parseInt(formData.rating, 10) === 2} onChange={handleChange} />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>
          <input className="rating__input" id="star-1" type="radio" name="rating" value="1" checked={parseInt(formData.rating, 10) === 1} onChange={handleChange} />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text" onChange={handleChange} value={formData.reviewText}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
