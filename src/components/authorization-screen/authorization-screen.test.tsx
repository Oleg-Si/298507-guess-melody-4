import * as React from 'react';
import * as renderer from 'react-test-renderer';
import AuthorizationScreen from './authorization-screen';
import {Router} from 'react-router-dom';
import history from '../../history';

it(`AuthorizationScreen should render correct`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AuthorizationScreen
          onSubmit={() => null}
          onReplayButtonClick={() => null}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
