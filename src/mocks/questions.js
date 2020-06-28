const AVATAR_URL = `//picsum.photos/134/134?r=`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        id: 0,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
      },
      {
        id: 1,
        src: `https://ru-drivemusic.net/dl/U96HV5OOndnnyglkRXcuVQ/1581984519/download_music/novogodnie_pesni/abba-happy-new-year.mp3`,
        genre: `blues`,
      },
      {
        id: 2,
        src: `https://mp3name.net/music/7694-twenty-one-pilots-stressed-out.mp3`,
        genre: `jazz`,
      },
      {
        id: 3,
        src: `https://mp3name.net/music/41700-twenty-one-pilots-ride.mp3`,
        genre: `rock`,
      }
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://mp3name.net/music/61956-twenty-one-pilots-level-of-concern.mp3`,
    },
    answers: [
      {
        id: 0,
        picture: `${AVATAR_URL}${Math.random()}`,
        artist: `Chivas Regal`,
      },
      {
        id: 1,
        picture: `${AVATAR_URL}${Math.random()}`,
        artist: `Jack Daniels`,
      },
      {
        id: 2,
        picture: `${AVATAR_URL}${Math.random()}`,
        artist: `Jim Beam`,
      }
    ],
  }
];
