import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {movieCardPropTypes} from './movie-card-prop-types.jsx';
import MovieCardVideo from '../movie-card-video/movie-card-video.jsx';
import {MOVIE_CARD_TIME} from '../../consts.js';

function MovieCard({id, title, previewSrc, previewVideoSrc, selectedMovie, setSelectedMovie}) {
  const [isLaunched, setIsLaunched] = useState(false);
  useEffect(() => {
    let cardTimer;
    if (id === selectedMovie) {
      cardTimer = setTimeout(() => {
        setIsLaunched(true);
      }, MOVIE_CARD_TIME);
    } else {
      setIsLaunched(false);
    }
    return () => clearTimeout(cardTimer);
  }, [id, selectedMovie]);
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => {setSelectedMovie(id);}} onMouseLeave={() => {setSelectedMovie(-1);}} >
      <Link className="small-film-card__link" to={`/films/${id}`}>
        <div className="small-film-card__image">
          <MovieCardVideo previewVideoSrc={previewVideoSrc} previewSrc={previewSrc} isLaunched={isLaunched} />
        </div>
      </Link>
      <h3 className="small-film-card__title"><Link className="small-film-card__link" to={`/films/${id}`}>{title}</Link></h3>
    </article>
  );
}

MovieCard.propTypes = movieCardPropTypes;

export default MovieCard;
