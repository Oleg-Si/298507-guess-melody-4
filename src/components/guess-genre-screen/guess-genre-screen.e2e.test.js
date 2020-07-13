import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {defaultGuessGenreScreen as GuessGenreScreen} from './guess-genre-screen.jsx';
import {questionGenreForTest} from '../../mocks/questions.js';

Enzyme.configure({
  adapter: new Adapter()
});

it(`When user answers genre question form is not send`, () => {
  const onSubmit = jest.fn();

  const guessGenreScreen = shallow(
      <GuessGenreScreen
        question={questionGenreForTest}
        onSubmit={onSubmit}
        onChange={() => {}}
        renderPlayer={() => {}}
      />
  );

  const form = guessGenreScreen.find(`form.game__tracks`);
  const formSubmitPrevent = jest.fn();

  form.simulate(`submit`, {preventDefault: formSubmitPrevent});

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(formSubmitPrevent).toHaveBeenCalledTimes(1);

});

it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
  const onSubmit = jest.fn();

  const guessGenreScreen = mount(
      <GuessGenreScreen
        question={questionGenreForTest}
        onSubmit={onSubmit}
        onChange={() => {}}
        renderPlayer={() => {}}
      />
  );


  const answerInputs = guessGenreScreen.find(`input.game__input`);
  const answer = answerInputs.at(0);
  const form = guessGenreScreen.find(`form.game__tracks`);

  answer.simulate(`change`);
  form.simulate(`submit`, {preventDefault() {}});

  expect(onSubmit).toHaveBeenCalledTimes(1);

  expect(onSubmit.mock.calls[0][0]).toEqual(undefined);
});
