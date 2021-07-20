import React from 'react';
import {connect} from 'react-redux';
import {setShowedFilmsNumber} from '../../store/action/action.js';
import {SHOW_FILMS_NUMBER} from '../../consts.js';
import {getFilms} from '../../store/reducer/films/selectors.js';
import {getChoosedGenre, getShowedFilmsNumber} from '../../store/reducer/view/selectors.js';
import {showMorePropTypes} from './show-more-prop-types.jsx';

function ShowMore({showedFilmsNumber, changeShowedFilmsNumber}) {
  return (
    <button className="catalog__button" type="button" onClick={() => changeShowedFilmsNumber(showedFilmsNumber + SHOW_FILMS_NUMBER)}>Show more</button>
  );
}

ShowMore.propTypes = showMorePropTypes;

const mapStateToProps = (state) => ({
  films: getFilms(state),
  choosedGenre: getChoosedGenre(state),
  showedFilmsNumber: getShowedFilmsNumber(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeShowedFilmsNumber(number) {
    dispatch(setShowedFilmsNumber(number));
  },
});

export {ShowMore};

export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
