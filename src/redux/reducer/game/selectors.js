import NameSpace from './../name-space';

const NAME_SPACE = NameSpace.GAME;

export const getStep = (state) => {
  return state[NAME_SPACE].step;
};

export const getMistakesCount = (state) => {
  return state[NAME_SPACE].mistakesCount;
};

export const getMaxMistakesCount = (state) => {
  return state[NAME_SPACE].maxMistakesCount;
};
