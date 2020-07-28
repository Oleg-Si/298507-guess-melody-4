import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {questionGenreForTest} from '../../mocks/questions';
import GenreQuestionItem from './genre-question-item';

it(`GenreQuestionItem is rendered correctly`, () => {
  const tree = renderer.create(
      <GenreQuestionItem
        id={0}
        answer={questionGenreForTest.answers[0]}
        onChange={() => null}
        renderPlayer={() => null}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
