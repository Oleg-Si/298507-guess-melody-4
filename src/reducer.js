import questions from './mocks/questions';
import {extend} from './utils';
import {GameType} from './constants';

const initialState = {
  mistakesCount: 0,
  maxMistakesCount: 3,
  questionId: 0,
  step: -1,
  questions
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1
  }),

  incrementMistakes: (question, userAnswer) => {
    let answerIsCorrect = null;

    switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;

      case GameType.GENRE:
        answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1
    };
  }
};

const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer.artist === question.song.artist;
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  const correctAnswers = question.answers.map((el) => question.genre === el.genre);
  return userAnswer.toString() === correctAnswers.toString();
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      const nextStep = state.step + action.payload;

      if (nextStep >= state.questions.length) {
        return extend({}, initialState);
      }

      return extend(state, {step: nextStep});

    case ActionType.INCREMENT_MISTAKES:
      const mistakes = state.mistakesCount + action.payload;

      if (mistakes >= state.maxMistakesCount) {
        return extend({}, initialState);
      }

      return extend(state, {mistakesCount: mistakes});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
