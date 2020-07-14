import ActionType from './action-type';
import reducer from './game';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    mistakesCount: 0,
    maxMistakesCount: 3,
    step: -1
  });
});

it(`Reducer should increment current step by a given value`, () => {
  expect(reducer({
    mistakesCount: 0,
    maxMistakesCount: 3,
    step: -1
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  })).toEqual({
    mistakesCount: 0,
    maxMistakesCount: 3,
    step: 0
  });

  expect(reducer({
    mistakesCount: 0,
    maxMistakesCount: 3,
    step: -1
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 0,
  })).toEqual({
    mistakesCount: 0,
    maxMistakesCount: 3,
    step: -1
  });
});

it(`Reducer should increment number of mistakes by a given value`, () => {
  expect(reducer({
    mistakesCount: 0,
    maxMistakesCount: 3,
    step: -1
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  })).toEqual({
    mistakesCount: 1,
    maxMistakesCount: 3,
    step: -1
  });

  expect(reducer({
    mistakesCount: 0,
    maxMistakesCount: 3,
    step: -1
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0,
  })).toEqual({
    mistakesCount: 0,
    maxMistakesCount: 3,
    step: -1
  });
});

it(`Reducer should reset game`, () => {
  expect(reducer({
    mistakesCount: 2,
    maxMistakesCount: 3,
    step: 2
  }, {
    type: ActionType.RESET_GAME
  })).toEqual({
    mistakesCount: 0,
    maxMistakesCount: 3,
    step: 0
  });
});
