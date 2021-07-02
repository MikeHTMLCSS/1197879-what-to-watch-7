import React, {useRef, useEffect} from 'react';
import {movieCardVideoPropTypes} from './movie-card-video-prop-types';

function MovieCardVideo({previewVideoSrc, previewSrc, isLaunched}) {
  const videoElement = useRef(null);
  useEffect(() => {
    if (isLaunched) {
      videoElement.current.src = previewVideoSrc;
      videoElement.current.play();
    } else {
      videoElement.current.src = null;
    }
  }, [previewVideoSrc, isLaunched]);
  return (
    <video ref={videoElement} muted className="small-film-card__image" poster={previewSrc}></video>
  );
}

MovieCardVideo.propTypes = movieCardVideoPropTypes;

export default MovieCardVideo;
