import reducer from './reducer';
import {ActionType} from './action-type';
import {ActionCreator} from './action-creator';
import questions, {questionsForTest} from '../mocks/questions';

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      mistakesCount: 0,
      maxMistakesCount: 3,
      questionId: 0,
      step: -1,
      questions
    });
  });

  it(`Reducer should increment current step by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakesCount: 0,
      questions: questionsForTest,
    }, {
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    })).toEqual({
      step: 0,
      mistakesCount: 0,
      questions: questionsForTest,
    });

    expect(reducer({
      step: -1,
      mistakesCount: 0,
      questions: questionsForTest,
    }, {
      type: ActionType.INCREMENT_STEP,
      payload: 0,
    })).toEqual({
      step: -1,
      mistakesCount: 0,
      questions: questionsForTest,
    });
  });

  it(`Reducer should increment number of mistakes by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakesCount: 0,
    }, {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    })).toEqual({
      step: -1,
      mistakesCount: 1,
    });

    expect(reducer({
      step: -1,
      mistakesCount: 0,
    }, {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0,
    })).toEqual({
      step: -1,
      mistakesCount: 0,
    });
  });

  it(`Reducer should reset game`, () => {
    expect(reducer({
      step: 2,
      mistakesCount: 2,
    }, {
      type: ActionType.RESET_GAME
    })).toEqual({
      mistakesCount: 0,
      maxMistakesCount: 3,
      questionId: 0,
      step: 0,
      questions
    });
  });
});

describe(`Action creators work correctly`, () => {
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

  it(`Action creator for reser game returns correct action`, () => {
    expect(ActionCreator.resetGame()).toEqual({
      type: ActionType.RESET_GAME
    });
  });
});
