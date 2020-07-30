import * as React from 'react';
import * as renderer from 'react-test-renderer';
import GameScreen from './game-screen';
import {GameType} from '../../types';
import {Router} from 'react-router-dom';
import history from '../../history';

const children = <div className="children-component"></div>;

it(`GameScreen component render correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <GameScreen
          type={GameType.ARTIST}
          mistakesCount={3}
          onButtonClick={() => null}
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
          onButtonClick={() => null}
        >
          {children}
        </GameScreen>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
