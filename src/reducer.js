import {extend} from './utils';
import {GameType} from './constants';

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        id: 0,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
      },
      {
        id: 1,
        src: `https://ru-drivemusic.net/dl/U96HV5OOndnnyglkRXcuVQ/1581984519/download_music/novogodnie_pesni/abba-happy-new-year.mp3`,
        genre: `blues`,
      },
      {
        id: 2,
        src: `https://mp3name.net/music/7694-twenty-one-pilots-stressed-out.mp3`,
        genre: `jazz`,
      },
      {
        id: 3,
        src: `https://mp3name.net/music/41700-twenty-one-pilots-ride.mp3`,
        genre: `rock`,
      }
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [
      {
        id: 1,
        picture: `//picsum.photos/134/134?r=34`,
        artist: `Chivas Regal`,
      },
      {
        id: 2,
        picture: `//picsum.photos/134/134?r=35`,
        artist: `Jack Daniels`,
      },
      {
        id: 3,
        picture: `//picsum.photos/134/134?r=36`,
        artist: `Jim Beam`,
      }
    ],
  }
];

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
