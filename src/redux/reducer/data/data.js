import {extend} from '../../../utils.js';
import ActionType from './action-type.js';

const initialState = {
  questions: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS:
      return extend(state, {questions: action.payload});
  }

  return state;
};

export default reducer;
