import React from 'react';
import renderer from 'react-test-renderer';
import {questionGenreForTest} from '../../mocks/questions.js';
import GenreQuestionItem from './genre-question-item.jsx';

it(`GenreQuestionItem is rendered correctly`, () => {
  const tree = renderer.create(
      <GenreQuestionItem
        id={0}
        answer={questionGenreForTest.answers[0]}
        onChange={() => {}}
        renderPlayer={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
