import React from 'react';
import renderer from 'react-test-renderer';
import AuthorizationScreen from './authorization-screen';
import {Router} from 'react-router-dom';
import history from './../../history';

it(`AuthorizationScreen should render correct`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AuthorizationScreen
          onSubmit={() => {}}
          onReplayButtonClick={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
