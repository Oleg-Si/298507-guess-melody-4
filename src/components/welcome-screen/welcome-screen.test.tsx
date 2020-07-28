import * as React from 'react';
import * as renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

const onWelcomeButtonClick = () => null;

it(`WelcomScreen should render error count`, () => {
  const tree = renderer.create(
      <WelcomeScreen
        onWelcomeButtonClick={onWelcomeButtonClick}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
