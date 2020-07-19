import React from 'react';
import renderer from 'react-test-renderer';
import GameOverScreen from './game-over-screen.jsx';
import {Router} from 'react-router-dom';
import history from './../../history';

it(`GameScreen component render correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <GameOverScreen
          onButtonClick={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
