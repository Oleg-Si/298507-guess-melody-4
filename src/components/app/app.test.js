import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore({});

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        id: 1,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
      },
      {
        id: 2,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `blues`,
      },
      {
        id: 3,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`,
      },
      {
        id: 4,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
      }
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [
      {
        id: 1,
        picture: `//picsum.photos/134/134?r=34`,
        artist: `Chivas Regal`,
      },
      {
        id: 2,
        picture: `//picsum.photos/134/134?r=35`,
        artist: `Jack Daniels`,
      },
      {
        id: 3,
        picture: `//picsum.photos/134/134?r=36`,
        artist: `Jim Beam`,
      }
    ],
  }
];

const onWelcomeButtonClick = () => {};

it(`Render WelcomeScreen`, () => {
  const store = mockStore({
    mistakesCount: 0,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          onWelcomeButtonClick={onWelcomeButtonClick}
          questions={questions}
          onAnswer={() => {}}
          mistakesCount={3}
          step={-1}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render GenreGameScreen`, () => {
  const store = mockStore({
    mistakesCount: 0,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          onWelcomeButtonClick={onWelcomeButtonClick}
          questions={questions}
          onAnswer={() => {}}
          mistakesCount={3}
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
    mistakesCount: 0,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          onWelcomeButtonClick={onWelcomeButtonClick}
          questions={questions}
          onAnswer={() => {}}
          mistakesCount={3}
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
