import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from './mistakes.jsx';


it(`Mistakes should render correct`, () => {
  const tree = renderer.create(
      <Mistakes
        mistakesCount={3}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
