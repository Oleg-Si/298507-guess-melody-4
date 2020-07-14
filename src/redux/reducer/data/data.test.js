import reducer from './data';
import {questionsForTest} from '../../../mocks/questions';
import ActionType from './action-type';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    questions: []
  });
});

it(`Reducer should update questions by load questions`, () => {
  expect(reducer({
    questions: [],
  }, {
    type: ActionType.LOAD_QUESTIONS,
    payload: questionsForTest,
  })).toEqual({
    questions: questionsForTest,
  });
});
