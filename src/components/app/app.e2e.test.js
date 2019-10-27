
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from './app';

Enzyme.configure({adapter: new Adapter()});

it(`App start button click`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<App
    errorCount={0}
    time={0}
    onButtonClick={clickHandler}
  />);

  const startButton = app.find(`button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
