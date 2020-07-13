import React from 'react';
import PropTypes from 'prop-types';
import withActivePlayer from '../../hocs/with-active-player/with-active-player.jsx';
import GenreQuestionItem from './../genre-question-item/genre-question-item.jsx';
import withUserAnswer from './../../hocs/with-user-answer/with-user-answer.jsx';

const GuessGenreScreen = (props) => {
  const {question, onSubmit, onChange, renderPlayer} = props;
  const {genre, answers} = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={(evt) => {
        evt.preventDefault();
        onSubmit();
      }}>

        {answers.map((el, i) => {
          return (
            <GenreQuestionItem
              key={el.id}
              id={i}
              answer={el}
              renderPlayer={renderPlayer}
              onChange={onChange}
            />
          );
        })}

        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  );
};

GuessGenreScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          src: PropTypes.string.isRequired,
          genre: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired
};

export const defaultGuessGenreScreen = GuessGenreScreen;
export default withActivePlayer(withUserAnswer(GuessGenreScreen));
