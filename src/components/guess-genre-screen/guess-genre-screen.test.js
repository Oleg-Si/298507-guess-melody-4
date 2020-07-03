import React from 'react';
import renderer from 'react-test-renderer';
import {defaultGuessGenreScreen as GuessGenreScreen} from './guess-genre-screen.jsx';
import {questionGenreForTest} from '../../mocks/questions.js';

it(`GuessGenreScreen should render gameScreen selection genre`, () => {
  const tree = renderer.create(
      <GuessGenreScreen
        question={questionGenreForTest}
        onAnswer={() => {}}
        renderPlayer={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
