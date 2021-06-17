import React, {useRef} from 'react';
import {useEffect} from 'react';
import {cardVideoPropTypes} from './card-video-prop-types.jsx';

function CardVideo({posterSrc, isLaunched}) {
  const videoElement = useRef(null);
  useEffect(() => {
    if (isLaunched) {
      videoElement.current.src = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';
      videoElement.current.play();
    } else {
      videoElement.current.src = null;
    }
  });
  return (
    <video ref={videoElement} poster={`img/${posterSrc}.jpg`}></video>
  );
}

CardVideo.propTypes = cardVideoPropTypes;

export default CardVideo;
