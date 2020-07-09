import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withAudio from './with-audio.jsx';

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const MockComponentWrapped = withAudio(MockComponent);

it(`withAudio is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      isPlaying={false}
      onButtonClick={() => {}}
      src={``}
    />
  ), {
    createNodeMock() {
      return {
        addEventListener: () => {}
      };
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
