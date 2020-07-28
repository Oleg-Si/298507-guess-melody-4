import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {defaultGuessArtistScreen as GuessArtistScreen} from './guess-artist-screen';
import {questionArtistForTest} from '../../mocks/questions';

Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault: () => null
};

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const onAnswer = jest.fn();
  const userAnswer = {
    id: 1,
    picture: `//picsum.photos/134/134?r=34`,
    artist: `Chivas Regal`,
  };

  const guessArtistScreen = Enzyme.shallow(
      <GuessArtistScreen
        question={questionArtistForTest}
        onAnswer={onAnswer}
        renderPlayer={() => null}
      />
  );

  const answerInputs = guessArtistScreen.find(`input.artist__input`);
  const answer = answerInputs.at(0);

  answer.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(questionArtistForTest);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

});
