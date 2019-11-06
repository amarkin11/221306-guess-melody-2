
import React from "react";
import ReactDOM from "react-dom";

import {questions, settings} from './mocks/questions';

import App from './components/app/app';

const init = (gameQuestions, gameSettings) => {

  ReactDOM.render(
      <App
        gameTime={gameSettings.gameTime}
        errorCount={gameSettings.errorCount}
        questions={gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(questions, settings);
