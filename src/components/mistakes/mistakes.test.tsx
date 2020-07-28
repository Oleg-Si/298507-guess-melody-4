import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Mistakes from './mistakes';


it(`Mistakes should render correct`, () => {
  const tree = renderer.create(
      <Mistakes
        mistakesCount={3}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
