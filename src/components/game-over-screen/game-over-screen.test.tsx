import * as React from 'react';
import * as renderer from 'react-test-renderer';
import GameOverScreen from './game-over-screen';
import {Router} from 'react-router-dom';
import history from '../../history';

it(`GameScreen component render correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <GameOverScreen
          onButtonClick={() => null}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
