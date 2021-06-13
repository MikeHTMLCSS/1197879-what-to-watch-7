import React from 'react';
import {Link} from 'react-router-dom';
import {movieCardPropTypes} from './movie-card-prop-types.jsx';

function MovieCard({i, movieTitle, posterSrc, setSelectedMovie}) {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={setSelectedMovie}>
      <div className="small-film-card__image">
        <img src={`img/${posterSrc}.jpg`} alt={movieTitle} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${i}`}>{movieTitle}</Link>
      </h3>
    </article>
  );
}

MovieCard.propTypes = movieCardPropTypes;

export default MovieCard;
