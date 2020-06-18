import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const onWelcomeButtonClick = () => {};

it(`App should render application`, () => {
  const tree = renderer.create(
      <App onWelcomeButtonClick={onWelcomeButtonClick} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
