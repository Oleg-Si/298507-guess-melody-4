import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const customStyle = {
  opacity: 0.5
};

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: props.isPlaying,
      isReady: true
    };

    this._audioRef = React.createRef();
  }

  componentDidMount() {
    const audio = this._audioRef.current;
    audio.src = this.props.src;

    audio.addEventListener(`canplay`, () => {
      this.setState({isReady: false});
    });
  }

  componentDidUpdate() {
    const audio = this._audioRef.current;

    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;
    audio.src = ``;
  }

  render() {
    return (
      <React.Fragment>
        <button className={`track__button track__button--${this.props.isPlaying ? `pause` : `play`}`} type="button" style={this.state.isReady ? customStyle : {}} disabled={this.state.isReady} onClick={() => {
          this.setState((prevState) => ({isPlaying: !prevState.isPlaying}));
          this.props.onButtonClick();
        }}></button>
        <div className="track__status">
          <audio ref={this._audioRef} autoPlay={this.state.isPlaying}></audio>
        </div>
      </React.Fragment>
    );
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func
};

export default AudioPlayer;
