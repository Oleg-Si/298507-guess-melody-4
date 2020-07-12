import React from 'react';
import renderer from 'react-test-renderer';
import GameOverScreen from './game-over-screen.jsx';

it(`GameScreen component render correctly`, () => {
  const tree = renderer.create(
      <GameOverScreen
        onButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
