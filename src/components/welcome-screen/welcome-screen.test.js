import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

it(`Welcome screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorCount={0}
      time={0}
      onStartButtonClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
