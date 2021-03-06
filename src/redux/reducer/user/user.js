import {extend} from '../../../utils.js';
import ActionType from './action-type.js';
import {AuthorizationStatus} from './../../../constants';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {authorizationStatus: action.payload});
  }

  return state;
};

export default reducer;
