import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {defaultGuessArtistScreen as GuessArtistScreen} from './guess-artist-screen';
import {questionArtistForTest} from '../../mocks/questions';

it(`GuessArtistScreen should render gameScreen selection artist`, () => {
  const tree = renderer.create(
      <GuessArtistScreen
        question={questionArtistForTest}
        onAnswer={() => null}
        renderPlayer={() => null}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
