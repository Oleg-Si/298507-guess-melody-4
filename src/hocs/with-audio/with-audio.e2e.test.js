import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withAudio from './with-audio.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const Player = (props) => {
  const {children} = props;
  return (
    <div>
      {children}
    </div>
  );
};

Player.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

it(`Checks that HOC's callback turn on audio (play)`, () => {
  const PlayerWrapped = withAudio(Player);
  const wrapper = mount(<PlayerWrapped
    isPlaying={true}
    onButtonClick={() => {}}
    src=""
  />);

  window.HTMLMediaElement.prototype.play = () => {};

  const {_audioRef} = wrapper.instance();

  jest.spyOn(HTMLMediaElement.prototype, `play`);

  wrapper.instance().componentDidMount();

  _audioRef.current.play();

  expect(_audioRef.current.play).toHaveBeenCalledTimes(1);
});

it(`Checks that HOC's callback turn off audio (pause)`, () => {
  const PlayerWrapped = withAudio(Player);
  const wrapper = mount(<PlayerWrapped
    isPlaying={true}
    onButtonClick={() => {}}
    src=""
  />);

  window.HTMLMediaElement.prototype.pause = () => {};

  const {_audioRef} = wrapper.instance();

  jest.spyOn(_audioRef.current, `pause`);

  wrapper.instance().componentDidMount();

  _audioRef.current.pause();

  expect(_audioRef.current.pause).toHaveBeenCalledTimes(1);
});
