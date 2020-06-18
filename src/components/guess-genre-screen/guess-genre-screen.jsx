import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const svgCircleStyles = {
  filter: `url(#blur)`,
  transform: `rotate(-90deg) scaleY(-1)`,
  transformOrigin: `center`
};

class GuessGenreScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answer: this._getAnswerTemplate()
    };
  }

  _getAnswerTemplate() {
    const count = this.props.data.answers.length;
    const arr = [];

    for (let i = 0; i < count; i++) {
      arr.push(false);
    }

    return arr;
  }

  render() {
    const {data, onAnswer} = this.props;
    const {genre, answers} = data;

    return (
      <section className="game game--genre">
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
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(data, this.state.answer);
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
      </section>
    );
  }
}

GuessGenreScreen.propTypes = {
  data: PropTypes.shape({
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
