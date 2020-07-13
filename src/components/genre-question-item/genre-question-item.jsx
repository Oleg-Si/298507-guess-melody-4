import React from 'react';
import PropTypes from 'prop-types';

const GenreQuestionItem = (props) => {
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

GenreQuestionItem.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default GenreQuestionItem;
