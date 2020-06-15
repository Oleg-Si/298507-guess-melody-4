import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

const errorsCount = 3;

it(`WelcomScreen should render error count = ${errorsCount}`, () => {
  const tree = renderer.create(
      <WelcomeScreen errorsCount={errorsCount} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
