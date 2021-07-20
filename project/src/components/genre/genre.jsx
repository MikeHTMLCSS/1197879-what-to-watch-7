import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getChoosedGenre} from '../../store/reducer/view/selectors.js';
import {genrePropTypes} from './genre-prop-types.jsx';

function Genre({genre, chooseGenre, hideFilms, choosedGenre}) {
  return (
    <li className={`catalog__genres-item ${choosedGenre === genre && 'catalog__genres-item--active'}`} onClick={() => {chooseGenre(); hideFilms();}}>
      <Link to="#" className="catalog__genres-link">{genre || 'All genres'}</Link>
    </li>
  );
}

Genre.propTypes = genrePropTypes;

const mapStateToProps = (state) => ({
  choosedGenre: getChoosedGenre(state),
});

export {Genre};

export default connect(mapStateToProps)(Genre);
