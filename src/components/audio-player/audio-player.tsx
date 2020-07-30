import * as React from 'react';
import withAudio from '../../hocs/with-audio/with-audio';

interface Props {
  isPlaying: boolean;
  isReady: boolean;
  onButtonClick: () => void;
  children: {};
}

const AudioPlayer: React.FC<Props> = (props: Props) => {
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

export {AudioPlayer};
export default withAudio(AudioPlayer);
