import React from 'react';
import {Link} from 'react-router-dom';
import {movieCardPropTypes} from './movie-card-prop-types.jsx';
import CardVideo from '../card-video/card-video.jsx';

function MovieCard({i, movieTitle, posterSrc, movieCardTime, selectedMovie, setSelectedMovie}) {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => {setSelectedMovie(i);}} onMouseOut={() => {setSelectedMovie(-1);}} >
      <div className="small-film-card__image">
        <CardVideo posterSrc={posterSrc} isLaunched={i === selectedMovie && movieCardTime} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${i}`}>{movieTitle}</Link>
      </h3>
    </article>
  );
}

MovieCard.propTypes = movieCardPropTypes;

export default MovieCard;
