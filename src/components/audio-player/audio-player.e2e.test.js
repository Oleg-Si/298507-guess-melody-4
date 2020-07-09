import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {AudioPlayer} from './audio-player.jsx';

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
        isReady={false}
      >
        <audio />
      </AudioPlayer>, {
        disableLifecycleMethods: true
      }
  );

  const button = audioPlayer.find(`button.track__button`);

  button.simulate(`click`);
  expect(onButtonClick).toHaveBeenCalledTimes(1);
});
