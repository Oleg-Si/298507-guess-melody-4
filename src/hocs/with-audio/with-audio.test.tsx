import * as React from "react";
import * as renderer from "react-test-renderer";
import withAudio from './with-audio';

interface Props {
  children: Node;
}

const MockComponent: React.FC<Props> = (props: Props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withAudio(MockComponent);

it(`withAudio is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      isPlaying={false}
      onButtonClick={() => null}
      src={``}
    />
  ), {
    createNodeMock() {
      return {
        addEventListener: () => null
      };
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
