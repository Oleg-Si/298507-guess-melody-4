import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/reducer';
import Operations from './redux/operations';
import thunk from 'redux-thunk';
import {createAPI} from './api.js';
import {composeWithDevTools} from 'redux-devtools-extension';

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(Operations.loadQuestions());

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
