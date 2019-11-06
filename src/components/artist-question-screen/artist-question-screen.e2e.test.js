
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistQuestionScreen from "./artist-question-screen";

Enzyme.configure({adapter: new Adapter()});

it(`when the user answers, the callback function gets the data in the correct format`, () => {
  const onUserAnswer = jest.fn();
  const artistQuestionScreen = shallow(<ArtistQuestionScreen
    question={{
      type: `artist`,
      song: {
        atrist: ``,
        src: ``
      },
      answers: [
        {
          picture: ``,
          artist: ``
        }
      ]
    }}
    screenIndex={0}
    onAnswer={jest.fn()}
  />);

  const formSubmit = artistQuestionScreen.find(`.game__artist`);
  formSubmit.simulate(`change`);

  expect(onUserAnswer).toHaveBeenCalledTimes(1);
});