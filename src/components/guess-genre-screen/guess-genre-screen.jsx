import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class GuessGenreScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answer: this._getAnswerTemplate()
    };
  }

  _getAnswerTemplate() {
    const count = this.props.question.answers.length;
    const arr = [];

    for (let i = 0; i < count; i++) {
      arr.push(false);
    }

    return arr;
  }

  render() {
    const {question, onAnswer} = this.props;
    const {genre, answers} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={(evt) => {
          evt.preventDefault();
          onAnswer(question, this.state.answer);
        }}>

          {answers.map((el) => {
            return (
              <div className="track" key={el.id}>
                <button className="track__button track__button--play" type="button"></button>
                <div className="track__status">
                  <audio src={el.src}></audio>
                </div>
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer" value={el.genre} id={`answer-${el.id}`} onChange={() => {
                    const oldState = this.state.answer;
                    oldState[el.id] = !oldState[el.id];
                    const newState = oldState;
                    this.setState({answers: newState});
                  }
                  }/>
                  <label className="game__check" htmlFor={`answer-${el.id}`}>Отметить</label>
                </div>
              </div>
            );
          })}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

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
  onAnswer: PropTypes.func.isRequired
};

export default GuessGenreScreen;
