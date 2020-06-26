import React from 'react';
import PropTypes from 'prop-types';

const GuessArtistScreen = (props) => {
  const {question, onAnswer} = props;
  const {song, answers} = question;

  return (
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
  );
};

GuessArtistScreen.propTypes = {
  question: PropTypes.shape({
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
