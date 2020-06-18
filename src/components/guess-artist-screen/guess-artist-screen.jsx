import React from 'react';
import PropTypes from 'prop-types';

const svgCircleStyles = {
  filter: `url(#blur)`,
  transform: `rotate(-90deg) scaleY(-1)`,
  transformOrigin: `center`
};

const GuessArtistScreen = (props) => {
  const {data, onAnswer} = props;
  const {song, answers} = data;

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={svgCircleStyles}/>
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio src={song.src}></audio>
            </div>
          </div>
        </div>

        <form className="game__artist">
          {answers.map((el) => {
            return (
              <div className="artist" key={el.id}>
                <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${el.id}`} id={`answer-${el.id}`} onChange={(evt) => {
                  evt.preventDefault();
                  onAnswer(song, el);
                }}/>
                <label className="artist__name" htmlFor={`answer-${el.id}`}>
                  <img className="artist__picture" src={el.picture} alt={el.artist}/>
                  {el.artist}
                </label>
              </div>
            );
          })}
        </form>
      </section>
    </section>
  );
};

GuessArtistScreen.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }).isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          picture: PropTypes.string.isRequired,
          artist: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
  }).isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default GuessArtistScreen;
