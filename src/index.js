
import React from "react";
import ReactDOM from "react-dom";

import questions from './mocks/questions';

import App from './components/app/app';

const init = (gameQuestions) => {
  const settings = {
    gameTime: 5,
    errorCount: 3
  };

  ReactDOM.render(
      <App
        gameTime={settings.gameTime}
        errorCount={settings.errorCount}
        questions={gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(questions);
