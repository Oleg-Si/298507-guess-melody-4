import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {defaultGuessArtistScreen as GuessArtistScreen} from './guess-artist-screen.jsx';
import {questionArtistForTest} from '../../mocks/questions.js';

Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const onAnswer = jest.fn();
  const userAnswer = {
    id: 1,
    picture: `//picsum.photos/134/134?r=34`,
    artist: `Chivas Regal`,
  };

  const guessArtistScreen = shallow(
      <GuessArtistScreen
        question={questionArtistForTest}
        onAnswer={onAnswer}
        renderPlayer={() => {}}
      />
  );

  const answerInputs = guessArtistScreen.find(`input.artist__input`);
  const answer = answerInputs.at(0);

  answer.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(questionArtistForTest);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

});
