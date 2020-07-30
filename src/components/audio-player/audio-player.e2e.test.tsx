import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {AudioPlayer} from './audio-player';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Click on track button leads to play or pause`, () => {
  const onButtonClick = jest.fn();

  const audioPlayer = Enzyme.shallow(
      <AudioPlayer
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
