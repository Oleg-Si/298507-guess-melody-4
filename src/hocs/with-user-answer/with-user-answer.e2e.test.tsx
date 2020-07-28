import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import withUserAnswer from "./with-user-answer";
import {questionGenreForTest} from "../../mocks/questions";

Enzyme.configure({
  adapter: new Adapter()
});

const MockComponent = () => <div />;
const MockComponentWrapped = withUserAnswer(MockComponent);

it(`Should change answers`, () => {
  const wrapper = Enzyme.shallow(<MockComponentWrapped
    question={questionGenreForTest}
    onAnswer={() => null}
  />);

  expect(wrapper.state().answers).toEqual([false, false, false, false]);

  wrapper.props().onChange(0, true);
  expect(wrapper.state().answers).toEqual([true, false, false, false]);

  wrapper.props().onChange(0, false);
  expect(wrapper.state().answers).toEqual([false, false, false, false]);

  wrapper.props().onChange(1, true);
  expect(wrapper.state().answers).toEqual([false, true, false, false]);
});
