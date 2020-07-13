import React from 'react';
import renderer from 'react-test-renderer';
import GameWinScreen from './game-win-screen.jsx';

it(`GameScreen component render correctly`, () => {
  const tree = renderer.create(
      <GameWinScreen
        onButtonClick={() => {}}
        questionsCount={6}
        mistakesCount={2}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
