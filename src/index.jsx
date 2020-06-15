import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';

const Settings = {
  ERRORS_COUNT: 3
};

const onWelcomeButtonClick = () => {
  // Клик по кнопке на WelcomScreen
};

ReactDom.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
      onWelcomeButtonClick={onWelcomeButtonClick}
    />,
    document.querySelector(`#root`)
);
