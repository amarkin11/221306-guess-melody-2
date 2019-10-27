
import React from "react";
import ReactDOM from "react-dom";

import App from './components/app/app';

const init = () => {
  const settings = {
    time: 7,
    errorCount: 4
  };

  ReactDOM.render(
      <App
        time={settings.time}
        errorCount={settings.errorCount}
        onButtonClick={() => {}}
      />,
      document.querySelector(`#root`)
  );
};

init();
