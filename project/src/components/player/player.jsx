import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {playerPropTypes} from './player-prop-types.jsx';

function Player({films, match}) {
  const [isPlayerActive, setIsPlayerActive] = useState(false);
  const videoElement = useRef(null);
  return (
    films &&
    <div className="player">
      <video ref={videoElement} src={films[match.params.id].videoSrc} className="player__video" poster="img/player-poster.jpg"></video>
      <Link to="/"><button type="button" className="player__exit">Exit</button></Link>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="0" max="100"></progress>
            <div className="player__toggler" style={{left: '0%'}}>Toggler</div>
          </div>
          {videoElement.current && <div className="player__time-value">{(videoElement.current.duration >= 3600) ? `${parseInt(videoElement.current.duration / 3600, 10)}:${parseInt((videoElement.current.duration % 3600) / 60, 10)}:${videoElement.current.duration % 60}` : `${parseInt(videoElement.current.duration / 60, 10)}:${parseInt(videoElement.current.duration % 60, 10)}`}</div>}
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
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Player.propTypes = playerPropTypes;

const mapStateToProps = ({FILMS}) => ({
  films: FILMS.films,
});

export {Player};

export default connect(mapStateToProps)(Player);
