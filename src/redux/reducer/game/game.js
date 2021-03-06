import {extend} from '../../../utils.js';
import ActionType from './action-type';

const initialState = {
  mistakesCount: 0,
  maxMistakesCount: 3,
  step: -1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      return extend(state, {step: state.step + action.payload});

    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {mistakesCount: state.mistakesCount + action.payload});

    case ActionType.RESET_GAME:
      return extend(initialState, {
        step: action.payload
      });
  }

  return state;
};

export default reducer;
