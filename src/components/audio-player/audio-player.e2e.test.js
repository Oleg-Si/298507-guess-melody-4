import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Click on track button leads to play or pause`, () => {
  const onButtonClick = jest.fn();

  const audioPlayer = shallow(
      <AudioPlayer
        src={`url`}
        onButtonClick={onButtonClick}
        isPlaying={true}
      />, {
        disableLifecycleMethods: true
      }
  );

  const button = audioPlayer.find(`button.track__button`);

  expect(audioPlayer.state().isPlaying).toBe(true);

  button.simulate(`click`);
  expect(audioPlayer.state().isPlaying).toBe(false);

  button.simulate(`click`);
  expect(audioPlayer.state().isPlaying).toBe(true);

  expect(onButtonClick).toHaveBeenCalledTimes(2);
});
