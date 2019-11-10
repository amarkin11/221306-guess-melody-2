import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      errorCount={0}
      gameTime={0}
      questions={[
        {
          type: `genre`,
          genre: ``,
          answers: [{
            src: ``,
            genre: ``,
          }],
        },
        {
          type: `artist`,
          song: {
            artist: ``,
            src: ``
          },
          answers: [
            {
              pisture: ``,
              artist: ``
            }
          ]
        }
      ]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
