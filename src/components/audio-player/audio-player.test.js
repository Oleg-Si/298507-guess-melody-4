import React from 'react';
import renderer from 'react-test-renderer';
import {AudioPlayer} from './audio-player.jsx';

it(`AudioPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <AudioPlayer
        src={`url`}
        onButtonClick={() => {}}
        isPlaying={true}
        isReady={false}
      >
        <audio />
      </AudioPlayer>, {
        createNodeMock: () => {
          return {
            addEventListener: () => {}
          };
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
