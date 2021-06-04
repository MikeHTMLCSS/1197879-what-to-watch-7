import React from 'react';
import PropTypes from 'prop-types';

function Film({movieTitle, src}) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={src} alt={movieTitle} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{movieTitle}</a>
      </h3>
    </article>
  );
}

Film.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Film;
