import React, {useRef, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {playerPropTypes} from './player-prop-types.jsx';

function Player({films, match}) {
  const [isPlayerActive, setIsPlayerActive] = useState(false);
  const videoElement = useRef(null);
  const [duration, setDuration] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      if (videoElement.current) {
        if (videoElement.current.duration) {
          setDuration(videoElement.current.duration);
        }
        setCurrentTime(videoElement.current.currentTime);
      }
    }, 1000);
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  document.addEventListener('keydown', () => setIsFullscreen(false));
  return (
    films &&
    <div className="player">
      <video ref={videoElement} src={films[match.params.id].videoSrc} className="player__video" poster={films[match.params.id].previewSrc}></video>
      <Link to="/"><button type="button" className="player__exit">Exit</button></Link>
      {
        !isFullscreen &&
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="0" max="100"></progress>
              <div className="player__toggler" style={{left: `${currentTime / duration * 100}%`}}>Toggler</div>
            </div>
            {duration && <div className="player__time-value">{((duration - currentTime) >= 3600) ? `${parseInt((duration - currentTime) / 3600, 10)}:${parseInt(((duration - currentTime) % 3600) / 60, 10)}:${(duration - currentTime) % 60}` : `${parseInt((duration - currentTime) / 60, 10)}:${parseInt((duration - currentTime) % 60, 10)}`}</div>}
          </div>
          <div className="player__controls-row">
            {
              isPlayerActive ?
                <button onClick={() => {
                  setIsPlayerActive(false);
                  videoElement.current.pause();
                }} type="button" className="player__play"
                >
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </button> :
                <button onClick={() => {
                  setIsPlayerActive(true);
                  videoElement.current.play();
                }} type="button" className="player__play"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
            }
            <div className="player__name">Transpotting</div>
            <button onClick={() => setIsFullscreen(true)} type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      }
    </div>
  );
}

Player.propTypes = playerPropTypes;

const mapStateToProps = ({FILMS}) => ({
  films: FILMS.films,
});

export {Player};

export default connect(mapStateToProps)(Player);
