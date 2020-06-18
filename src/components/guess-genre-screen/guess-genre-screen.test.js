import React from 'react';
import renderer from 'react-test-renderer';
import GuessGenreScreen from './guess-genre-screen.jsx';

const question = {
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
};

const onAnswer = () => {};

it(`GuessGenreScreen should render gameScreen selection genre`, () => {
  const tree = renderer.create(
      <GuessGenreScreen
        question={question}
        onAnswer={onAnswer}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
