import React from 'react';
import renderer from 'react-test-renderer';
import AuthorizationScreen from './authorization-screen';


it(`AuthorizationScreen should render correct`, () => {
  const tree = renderer.create(
      <AuthorizationScreen
        onSubmit={() => {}}
        onReplayButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
