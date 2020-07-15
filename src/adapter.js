const createArtistQuestions = (data) => {
  return {
    type: data.type,
    song: {
      artist: data.song.artist,
      src: data.song.src,
    },
    answers: data.answers.map((el, i) => {
      return {
        id: i,
        picture: el.picture,
        artist: el.artist,
      };
    })
  };
};

const createGenreQuestions = (data) => {
  return {
    type: data.type,
    genre: data.genre,
    answers: data.answers.map((el, i) => {
      return {
        id: i,
        src: el.src,
        genre: el.genre,
      };
    })
  };
};

export {createArtistQuestions, createGenreQuestions};
