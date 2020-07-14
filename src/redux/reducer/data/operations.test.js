import ActionType from './action-type';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../api';
import Operations from './operations';

const api = createAPI(() => {});

it(`Should make a correct API call to /questions`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const questionLoader = Operations.loadQuestions();

  apiMock
    .onGet(`/questions`)
    .reply(200, [{fake: true}]);

  return questionLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_QUESTIONS,
        payload: [{fake: true}],
      });
    });
});
