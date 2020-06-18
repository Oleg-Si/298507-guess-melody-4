import React from 'react';
import renderer from 'react-test-renderer';
import GuessArtistScreen from './guess-artist-screen.jsx';

const question = {
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
};

const onAnswer = () => {};

it(`GuessArtistScreen should render gameScreen selection artist`, () => {
  const tree = renderer.create(
      <GuessArtistScreen
        question={question}
        onAnswer={onAnswer}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
