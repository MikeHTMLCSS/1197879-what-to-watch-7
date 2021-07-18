import React from 'react';
import {connect} from 'react-redux';
import {changeIsFavorite} from '../../services/api-actions/api-actions.js';
import {myButtonPropTypes} from './my-button-prop-types.jsx';

function MyButton({id, isFavorite, postIsFavorite, updatePromo = null}) {
  return (
    <button onClick={() => {
      postIsFavorite(!isFavorite, parseInt(id, 10));
      if (updatePromo) {
        updatePromo();
      }
    }} className="btn btn--list film-card__button" type="button"
    >
      {
        isFavorite ?
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg> :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
      }
      <span>My list</span>
    </button>
  );
}

MyButton.propTypes = myButtonPropTypes;

const mapDispatchToProps = (dispatch) => ({
  postIsFavorite(status, id) {
    dispatch(changeIsFavorite(status, id));
  },
});

export {MyButton};

export default connect(null, mapDispatchToProps)(MyButton);
