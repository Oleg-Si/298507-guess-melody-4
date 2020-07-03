import React from 'react';
import renderer from 'react-test-renderer';
import {defaultGuessArtistScreen as GuessArtistScreen} from './guess-artist-screen.jsx';
import {questionArtistForTest} from '../../mocks/questions.js';

it(`GuessArtistScreen should render gameScreen selection artist`, () => {
  const tree = renderer.create(
      <GuessArtistScreen
        question={questionArtistForTest}
        onAnswer={() => {}}
        renderPlayer={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
