
import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen";

it(`Artist question screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ArtistQuestionScreen
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
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});