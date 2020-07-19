import React from 'react';
import renderer from 'react-test-renderer';
import GameScreen from './game-screen.jsx';
import {GameType} from './../../constants';
import {Router} from 'react-router-dom';
import history from './../../history';

const children = <div className="children-component"></div>;

it(`GameScreen component render correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <GameScreen
          type={GameType.ARTIST}
          mistakesCount={3}
          onButtonClick={() => {}}
        >
          {children}
        </GameScreen>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`GameScreen component render correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <GameScreen
          type={GameType.GENRE}
          mistakesCount={3}
          onButtonClick={() => {}}
        >
          {children}
        </GameScreen>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
