import React from 'react';
import renderer from 'react-test-renderer';
import GameWinScreen from './game-win-screen.jsx';
import {Router} from 'react-router-dom';
import history from './../../history';

it(`GameScreen component render correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <GameWinScreen
          onButtonClick={() => {}}
          questionsCount={6}
          mistakesCount={2}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
