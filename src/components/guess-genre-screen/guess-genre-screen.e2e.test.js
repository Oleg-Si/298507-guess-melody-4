import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {defaultGuessGenreScreen as GuessGenreScreen} from './guess-genre-screen.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      id: 0,
      src: `img1`,
      genre: `rock`,
    },
    {
      id: 1,
      src: `img2`,
      genre: `blues`,
    },
    {
      id: 2,
      src: `img3`,
      genre: `jazz`,
    },
    {
      id: 3,
      src: `img4`,
      genre: `rock`,
    }
  ],
};

it(`When user answers genre question form is not send`, () => {
  const onAnswer = jest.fn();

  const guessGenreScreen = shallow(
      <GuessGenreScreen
        question={question}
        onAnswer={onAnswer}
        renderPlayer={() => {}}
      />
  );

  const form = guessGenreScreen.find(`form.game__tracks`);
  const formSubmitPrevent = jest.fn();

  form.simulate(`submit`, {preventDefault: formSubmitPrevent});

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSubmitPrevent).toHaveBeenCalledTimes(1);
});

it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
  const onAnswer = jest.fn();
  const userAnswer = [true, false, false, false];

  const guessGenreScreen = shallow(
      <GuessGenreScreen
        question={question}
        onAnswer={onAnswer}
        renderPlayer={() => {}}
      />
  );

  const answerInputs = guessGenreScreen.find(`input.game__input`);
  const answer = answerInputs.at(0);
  const form = guessGenreScreen.find(`form.game__tracks`);

  answer.simulate(`change`);
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
