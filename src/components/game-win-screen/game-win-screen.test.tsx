import * as React from 'react';
import * as renderer from 'react-test-renderer';
import GameWinScreen from './game-win-screen';
import {Router} from 'react-router-dom';
import history from '../../history';

it(`GameScreen component render correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <GameWinScreen
          onButtonClick={() => null}
          questionsCount={6}
          mistakesCount={2}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
