import {extend} from '../utils';
import {ActionType} from './action-type';
import questions from '../mocks/questions';

const initialState = {
  mistakesCount: 0,
  maxMistakesCount: 3,
  questionId: 0,
  step: -1,
  questions
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      return extend(state, {step: state.step + action.payload});

    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {mistakesCount: state.mistakesCount + action.payload});

    case ActionType.RESET_GAME:
      return extend(initialState, {
        step: 0
      });
  }

  return state;
};

export default reducer;
