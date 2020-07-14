import ActionType from './action-type';
import ActionCreator from './action-creator';
import {AuthorizationStatus} from '../../../constants';

it(`Action creator returns correct action`, () => {
  expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  });

  expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  });
});
