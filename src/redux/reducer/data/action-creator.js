import ActionType from './action-type';

const ActionCreator = {
  loadQuestions: (questions) => ({
    type: ActionType.LOAD_QUESTIONS,
    payload: questions
  })
};

export default ActionCreator;
