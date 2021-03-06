import ActionType from './action-type';
import ActionCreator from './action-creator';

it(`Action creator for incrementing step returns correct action`, () => {
  expect(ActionCreator.incrementStep()).toEqual({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  });
});

it(`Action creator for incrementing mistake returns action with 0 payload if answer for artist is correct`, () => {
  expect(ActionCreator.incrementMistakes({
    type: `artist`,
    song: {
      artist: `correct`,
      src: ``,
    },
    answers: [
      {
        artist: `correct`,
        picture: ``,
      }, {
        artist: `incorrect`,
        picture: ``,
      }, {
        artist: `incorrect-2`,
        picture: ``,
      },
    ]
  }, {
    artist: `correct`,
    picture: ``,
  })).toEqual({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0,
  });
});

it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
  expect(ActionCreator.incrementMistakes({
    type: `artist`,
    song: {
      artist: `correct`,
      src: ``,
    },
    answers: [
      {
        artist: `correct`,
        picture: ``,
      }, {
        artist: `incorrect`,
        picture: ``,
      }, {
        artist: `incorrect-2`,
        picture: ``,
      },
    ]
  }, {
    artist: `incorrect`,
    picture: ``,
  })).toEqual({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  });
});

it(`Action creator for incrementing mistake returns action with 0 payload if answer for genre is correct`, () => {
  expect(ActionCreator.incrementMistakes({
    type: `genre`,
    genre: `jazz`,
    answers: [
      {
        genre: `rock`,
        src: ``,
      }, {
        genre: `jazz`,
        src: ``,
      }, {
        genre: `blues`,
        src: ``,
      }, {
        genre: `blues`,
        src: ``,
      },
    ]
  }, [false, true, false, false])).toEqual({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0,
  });
});

it(`Action creator for incrementing mistake returns action with 1 payload if answer for genre is incorrect`, () => {
  expect(ActionCreator.incrementMistakes({
    type: `genre`,
    genre: `jazz`,
    answers: [
      {
        genre: `blues`,
        src: ``,
      }, {
        genre: `blues`,
        src: ``,
      }, {
        genre: `blues`,
        src: ``,
      }, {
        genre: `blues`,
        src: ``,
      },
    ]
  }, [true, true, true, true])).toEqual({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  });
});

it(`Action creator for reset game returns correct action`, () => {
  expect(ActionCreator.resetGame(0)).toEqual({
    type: ActionType.RESET_GAME,
    payload: 0
  });
});

it(`Action creator for reset game returns correct action`, () => {
  expect(ActionCreator.resetGame(-1)).toEqual({
    type: ActionType.RESET_GAME,
    payload: -1
  });
});
