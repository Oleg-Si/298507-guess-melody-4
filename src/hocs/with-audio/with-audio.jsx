import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withAudio = (Component) => {
  class WithAudio extends PureComponent {
    constructor(props) {
      super(props);

      this._audioRef = React.createRef();

      this.state = {
        isPlaying: props.isPlaying,
        isReady: false
      };
    }

    componentDidMount() {
      const audio = this._audioRef.current;
      audio.src = this.props.src;

      audio.addEventListener(`canplay`, () => {
        this.setState({isReady: true});
      });
    }

    componentDidUpdate() {
      const audio = this._audioRef.current;

      if (this.props.isPlaying !== this.state.isPlaying) {
        this.setState({isPlaying: this.props.isPlaying});
      }

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
      const {isReady, isPlaying} = this.state;
      const {onButtonClick} = this.props;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          isReady={isReady}
          onButtonClick={onButtonClick}
        >
          <audio
            ref={this._audioRef}
          />
        </Component>
      );
    }
  }

  WithAudio.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired
  };

  return WithAudio;
};

export default withAudio;
