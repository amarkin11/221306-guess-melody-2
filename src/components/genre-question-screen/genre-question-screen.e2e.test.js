import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen";

Enzyme.configure({adapter: new Adapter()});

it(`when the user answers, the callback function gets the data in the correct format`, () => {
  const onUserAnswer = jest.fn();
  const genreQuestionScreen = shallow(<GenreQuestionScreen
    question={{
      type: `genre`,
      genre: ``,
      answers: [
        {
          src: ``,
          genre: ``
        }
      ]
    }}
    screenIndex={0}
    onAnswer={onUserAnswer}
  />);

  const formSubmit = genreQuestionScreen.find(`.game__tracks`);
  formSubmit.simulate(`submit`, {preventDefault() {}});

  expect(onUserAnswer).toHaveBeenCalledTimes(1);
});
