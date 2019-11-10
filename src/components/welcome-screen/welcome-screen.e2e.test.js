import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({adapter: new Adapter()});

it(`Welcome screen start button click`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen
    errorCount={0}
    time={0}
    onStartButtonClick={clickHandler}
  />);

  const startButton = welcomeScreen.find(`button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
