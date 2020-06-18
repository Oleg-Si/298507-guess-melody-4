import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

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

it(`App should render application`, () => {
  const tree = renderer.create(
      <App
        onWelcomeButtonClick={onWelcomeButtonClick}
        questions={questions}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
