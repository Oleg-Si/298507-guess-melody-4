import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {defaultGuessGenreScreen as GuessGenreScreen} from './guess-genre-screen';
import {questionGenreForTest} from '../../mocks/questions';

it(`GuessGenreScreen should render gameScreen selection genre`, () => {
  const tree = renderer.create(
      <GuessGenreScreen
        question={questionGenreForTest}
        onSubmit={() => null}
        onChange={() => null}
        renderPlayer={() => null}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
