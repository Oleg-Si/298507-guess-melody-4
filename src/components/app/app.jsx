import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GuessArtistScreen from '../guess-artist-screen/guess-artist-screen.jsx';
import GuessGenreScreen from '../guess-genre-screen/guess-genre-screen.jsx';
import {GameType} from './../../constants';
import GameScreen from '../game-screen/game-screen.jsx';
import {connect} from "react-redux";
import ActionCreator from '../../redux/reducer/game/action-creator';
import {GameSettings} from './../../game-settings';
import GameOverScreen from '../game-over-screen/game-over-screen.jsx';
import GameWinScreen from '../game-win-screen/game-win-screen.jsx';
import {getStep, getMistakesCount} from './../../redux/reducer/game/selectors';
import {getQuestions} from './../../redux/reducer/data/selectors';

class App extends PureComponent {
  _renderGame() {
    const {questions, step, mistakesCount, onWelcomeButtonClick, onAnswer, onResetGame} = this.props;
    const question = questions[step];

    if (step === -1) {
      return (
        <WelcomeScreen onWelcomeButtonClick={onWelcomeButtonClick} />
      );
    }

    if (mistakesCount >= GameSettings.MAX_MISTAKES_COUNT) {
      return (
        <GameOverScreen onButtonClick={onResetGame} />
      );
    }

    if (step >= questions.length) {
      return (
        <GameWinScreen
          onButtonClick={onResetGame}
          mistakesCount={mistakesCount}
          questionsCount={questions.length}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen
              type={question.type}
              mistakesCount={mistakesCount}
            >
              <GuessArtistScreen
                question={question}
                onAnswer={onAnswer}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen
              type={question.type}
              mistakesCount={mistakesCount}
            >
              <GuessGenreScreen
                question={question}
                onAnswer={onAnswer}
              />
            </GameScreen>
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGame()}
          </Route>
          <Route exact path="/artist">
            <GameScreen
              type={GameType.ARTIST}
              mistakesCount={2}
            >
              <GuessArtistScreen
                question={questions[1]}
                onAnswer={() => {}}
              />
            </GameScreen>
          </Route>
          <Route exact path="/genre">
            <GameScreen
              type={GameType.GENRE}
              mistakesCount={2}
            >
              <GuessGenreScreen
                question={questions[0]}
                onAnswer={() => {}}
              />
            </GameScreen>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  questions: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  mistakesCount: PropTypes.number.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onResetGame: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  step: getStep(state),
  mistakesCount: getMistakesCount(state),
  questions: getQuestions(state)
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onAnswer(question, answer) {
    dispatch(ActionCreator.incrementMistakes(question, answer));
    dispatch(ActionCreator.incrementStep());
  },
  onResetGame() {
    dispatch(ActionCreator.resetGame());
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
