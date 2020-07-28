import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/reducer/reducer';
import DataOperations from './redux/reducer/data/operations';
import UserOperations from './redux/reducer/user/operations';
import thunk from 'redux-thunk';
import {createAPI} from './api';
import {composeWithDevTools} from 'redux-devtools-extension';
import ActionCreator from './redux/reducer/user/action-creator';
import {AuthorizationStatus} from './constants';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(UserOperations.checkAuth());
store.dispatch(DataOperations.loadQuestions());

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
