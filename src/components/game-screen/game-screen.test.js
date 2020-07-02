import React from 'react';
import renderer from 'react-test-renderer';
import GameScreen from './game-screen.jsx';
import {GameType} from './../../constants';

const children = <div className="children-component"></div>;

it(`GameScreen component render correctly`, () => {
  const tree = renderer.create(
      <GameScreen
        type={GameType.ARTIST}
        mistakesCount={3}
      >
        {children}
      </GameScreen>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
