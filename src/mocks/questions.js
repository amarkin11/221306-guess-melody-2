
const settings = {
  gameTime: 5,
  errorCount: 3
};

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `rock`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `pop`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `jazz`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `rock`
      },
    ]
  },
  {
    type: `artist`,
    song: {
      atrist: `Lorde`,
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `Пелагея`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Краснознаменная дивизия имени моей бабушки`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Lorde`
      },
    ]
  }
];

export {questions, settings};
