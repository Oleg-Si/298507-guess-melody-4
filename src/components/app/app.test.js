import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {questionsForTest} from '../../mocks/questions.js';
import NameSpace from './../../redux/reducer/name-space';
import {AuthorizationStatus} from '../../constants.js';

const mockStore = configureStore({});

const onWelcomeButtonClick = () => {};

it(`Render WelcomeScreen`, () => {
  const store = mockStore({
    [NameSpace.GAME]: {
      mistakesCount: 0
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          onWelcomeButtonClick={onWelcomeButtonClick}
          questions={questionsForTest}
          onAnswer={() => {}}
          onResetGame={() => {}}
          login={() => {}}
          goHome={() => {}}
          authorizationStatus={`NO_AUTH`}
          mistakesCount={3}
          step={-1}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render GenreGameScreen`, () => {
  const store = mockStore({
    [NameSpace.GAME]: {
      mistakesCount: 0
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          onWelcomeButtonClick={onWelcomeButtonClick}
          questions={questionsForTest}
          onAnswer={() => {}}
          onResetGame={() => {}}
          login={() => {}}
          goHome={() => {}}
          authorizationStatus={`NO_AUTH`}
          mistakesCount={1}
          step={0}
        />
      </Provider>, {
        createNodeMock: () => {
          return {
            addEventListener: () => {}
          };
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render ArtistGameScreen`, () => {
  const store = mockStore({
    [NameSpace.GAME]: {
      mistakesCount: 0
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          onWelcomeButtonClick={onWelcomeButtonClick}
          questions={questionsForTest}
          onAnswer={() => {}}
          onResetGame={() => {}}
          login={() => {}}
          goHome={() => {}}
          authorizationStatus={`NO_AUTH`}
          mistakesCount={1}
          step={1}
        />
      </Provider>, {
        createNodeMock: () => {
          return {
            addEventListener: () => {}
          };
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
