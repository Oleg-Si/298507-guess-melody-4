import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {AudioPlayer} from './audio-player';

it(`AudioPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <AudioPlayer
        onButtonClick={() => null}
        isPlaying={true}
        isReady={false}
      >
        <audio />
      </AudioPlayer>, {
        createNodeMock: () => {
          return {
            addEventListener: () => null
          };
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
