import * as React from 'react';
import withActivePlayer from '../../hocs/with-active-player/with-active-player';
import GenreQuestionItem from '../genre-question-item/genre-question-item';
import withUserAnswer from '../../hocs/with-user-answer/with-user-answer';
import {QuestionGenre} from '../../types';

interface Props {
  question: QuestionGenre;
  onSubmit: () => void;
  onChange: () => void;
  renderPlayer: () => void;
}

const GuessGenreScreen: React.FC<Props> = (props: Props) => {
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

export const defaultGuessGenreScreen = GuessGenreScreen;
export default withActivePlayer(withUserAnswer(GuessGenreScreen));
