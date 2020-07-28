import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import withAudio from './with-audio';

Enzyme.configure({
  adapter: new Adapter()
});

interface Props {
  children: Node;
}

const Player: React.FC<Props> = (props: Props) => {
  const {children} = props;
  return (
    <div>
      {children}
    </div>
  );
};

it(`Checks that HOC's callback turn on audio (play)`, () => {
  const PlayerWrapped = withAudio(Player);
  const wrapper = Enzyme.mount(<PlayerWrapped
    isPlaying={true}
    onButtonClick={() => null}
    src=""
  />);

  window.HTMLMediaElement.prototype.play = () => null;

  const {_audioRef} = wrapper.instance();

  jest.spyOn(HTMLMediaElement.prototype, `play`);

  wrapper.instance().componentDidMount();

  _audioRef.current.play();

  expect(_audioRef.current.play).toHaveBeenCalledTimes(1);
});

it(`Checks that HOC's callback turn off audio (pause)`, () => {
  const PlayerWrapped = withAudio(Player);
  const wrapper = Enzyme.mount(<PlayerWrapped
    isPlaying={true}
    onButtonClick={() => null}
    src=""
  />);

  window.HTMLMediaElement.prototype.pause = () => null;

  const {_audioRef} = wrapper.instance();

  jest.spyOn(_audioRef.current, `pause`);

  wrapper.instance().componentDidMount();

  _audioRef.current.pause();

  expect(_audioRef.current.pause).toHaveBeenCalledTimes(1);
});
