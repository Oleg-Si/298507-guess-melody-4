import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import questions from './mocks/questions.js';

ReactDom.render(
    <App questions={questions} />,
    document.querySelector(`#root`)
);
