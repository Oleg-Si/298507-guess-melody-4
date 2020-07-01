import questions from './mocks/questions';
import {extend} from './utils';

const initialState = {
  mistakesCount: 0,
  maxMistakesCount: 3,
  questionId: 0,
  step: -1,
  questions
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1
  }),

  incrementMistakes: () => ({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + action.payload;

      if (nextStep >= state.questions.length) {
        return extend({}, initialState);
      }

      return extend(state, {step: nextStep});

    case ActionType.INCREMENT_MISTAKES:
      let mistakes = state.mistakesCount + action.payload;

      return extend(state, {mistakesCount: mistakes});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
