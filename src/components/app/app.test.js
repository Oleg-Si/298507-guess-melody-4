import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const errorsCount = 3;
const onWelcomeButtonClick = () => {};

it(`App should render application`, () => {
  const tree = renderer.create(
      <App
        errorsCount={errorsCount}
        onWelcomeButtonClick={onWelcomeButtonClick}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
