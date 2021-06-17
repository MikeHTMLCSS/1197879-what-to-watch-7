import React from 'react';
import {Link} from 'react-router-dom';
import {genrePropTypes} from './genre-prop-types.jsx';

function Genre({genre}) {
  return (
    <li className="catalog__genres-item">
      <Link to="#" className="catalog__genres-link">{genre}</Link>
    </li>
  );
}

Genre.propTypes = genrePropTypes;

export default Genre;
