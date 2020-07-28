import * as React from 'react';
import {AnswerGenre} from './../../types';

interface Props {
  answer: AnswerGenre;
  onChange: (id: number) => void;
  renderPlayer: (src: string, id: number) => void;
  id: number;
}

const GenreQuestionItem: React.FC<Props> = (props: Props) => {
  const {answer, id, onChange, renderPlayer} = props;

  return (
    <div className="track">

      {renderPlayer(answer.src, id)}

      <div className="game__answer">
        <input className="game__input visually-hidden" type="checkbox" name="answer" value={answer.genre} id={`answer-${answer.id}`} onChange={() => {
          onChange(id);
        }}/>
        <label className="game__check" htmlFor={`answer-${answer.id}`}>Отметить</label>
      </div>
    </div>
  );
};

export default GenreQuestionItem;
