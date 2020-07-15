import ActionType from './action-type';

const ActionCreator = {
  requireAuthorization: (authStatus) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: authStatus
  })
};

export default ActionCreator;
