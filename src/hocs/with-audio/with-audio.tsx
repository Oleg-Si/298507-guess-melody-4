import * as React from 'react';

interface Props {
  isPlaying: boolean;
  onButtonClick: () => void;
  src: string;
}

interface State {
  isPlaying: boolean;
  isReady: boolean;
}

const withAudio = (Component) => {
  class WithAudio extends React.PureComponent<Props, State> {
    private _audioRef: React.RefObject<HTMLAudioElement>;

    constructor(props: Props) {
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

      audio.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      audio.onpause = () => this.setState({
        isPlaying: false,
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
      const {isReady, isPlaying} = this.state;
      const {onButtonClick} = this.props;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          isReady={isReady}
          onButtonClick={() => {
            this.setState({isPlaying: !isPlaying});
            onButtonClick();
          }}
        >
          <audio
            ref={this._audioRef}
          />
        </Component>
      );
    }
  }

  return WithAudio;
};

export default withAudio;
