import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import questions from './mocks/questions.js';
import {GameSettings} from './game-settings.js';

ReactDom.render(
    <App
      errorsCount={GameSettings.ERRORS_COUNT}
      questions={questions}
    />,
    document.querySelector(`#root`)
);
