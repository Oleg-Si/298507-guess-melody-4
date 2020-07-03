import {extend} from '../utils';
import {ActionType} from './action-type';
import {questionsForTest} from '../mocks/questions';

const initialState = {
  mistakesCount: 0,
  maxMistakesCount: 3,
  questionId: 0,
  step: -1,
  questions: questionsForTest
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      const nextStep = state.step + action.payload;

      if (nextStep >= state.questions.length) {
        return extend({}, initialState);
      }

      return extend(state, {step: nextStep});

    case ActionType.INCREMENT_MISTAKES:
      const mistakes = state.mistakesCount + action.payload;

      if (mistakes >= state.maxMistakesCount) {
        return extend({}, initialState);
      }

      return extend(state, {mistakesCount: mistakes});
  }

  return state;
};

export default reducer;
