import React from 'react';
import PropTypes from 'prop-types';
import withAudio from '../../hocs/with-audio/with-audio.jsx';

const AudioPlayer = (props) => {
  const {isReady, isPlaying, children, onButtonClick} = props;

  return (
    <React.Fragment>
      <button
        className={`track__button ${isPlaying ? `track__button--pause` : `track__button--play`}`}
        type="button"
        style={!isReady ? {opacity: 0.5} : {}}
        disabled={!isReady}
        onClick={onButtonClick}
      />
      <div className="track__status">
        {children}
      </div>
    </React.Fragment>
  );
};

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isReady: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export {AudioPlayer};
export default withAudio(AudioPlayer);
