import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withUserAnswer from "./with-user-answer.jsx";
import {questionGenreForTest} from "../../mocks/questions.js";

Enzyme.configure({
  adapter: new Adapter()
});

const MockComponent = () => <div />;
const MockComponentWrapped = withUserAnswer(MockComponent);

it(`Should change answers`, () => {
  const wrapper = shallow(<MockComponentWrapped
    question={questionGenreForTest}
    onAnswer={() => {}}
  />);

  expect(wrapper.state().answers).toEqual([false, false, false, false]);

  wrapper.props().onChange(0, true);
  expect(wrapper.state().answers).toEqual([true, false, false, false]);

  wrapper.props().onChange(0, false);
  expect(wrapper.state().answers).toEqual([false, false, false, false]);

  wrapper.props().onChange(1, true);
  expect(wrapper.state().answers).toEqual([false, true, false, false]);
});
