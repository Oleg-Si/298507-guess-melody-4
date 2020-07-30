import ActionType from './action-type';
import {GameType} from '../../../types';

const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer.artist === question.song.artist;
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  const correctAnswers = question.answers.map((el) => question.genre === el.genre);
  return userAnswer.toString() === correctAnswers.toString();
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
  },

  resetGame: (step) => ({
    type: ActionType.RESET_GAME,
    payload: step
  })
};

export default ActionCreator;
