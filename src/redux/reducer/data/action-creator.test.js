import ActionType from './action-type';
import ActionCreator from './action-creator';
import {questionsForTest} from '../../../mocks/questions';

it(`Action creator for incrementing step returns correct action`, () => {
  expect(ActionCreator.loadQuestions(questionsForTest)).toEqual({
    type: ActionType.LOAD_QUESTIONS,
    payload: questionsForTest,
  });
});
