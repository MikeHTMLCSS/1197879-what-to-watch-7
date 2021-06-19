import React, {useRef, useEffect} from 'react';
import {movieCardVideoPropTypes} from './movie-card-video-prop-types';

function MovieCardVideo({posterSrc, isLaunched}) {
  const videoElement = useRef(null);
  useEffect(() => {
    if (isLaunched) {
      videoElement.current.src = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';
      videoElement.current.play();
    } else {
      videoElement.current.src = null;
    }
  }, [isLaunched]);
  return (
    <video ref={videoElement} muted className="small-film-card__image" poster={`img/${posterSrc}.jpg`}></video>
  );
}

MovieCardVideo.propTypes = movieCardVideoPropTypes;

export default MovieCardVideo;
