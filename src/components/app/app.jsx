import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GuessArtistScreen from '../guess-artist-screen/guess-artist-screen.jsx';
import GuessGenreScreen from '../guess-genre-screen/guess-genre-screen.jsx';
import {GameType, AuthorizationStatus} from './../../constants';
import GameScreen from '../game-screen/game-screen.jsx';
import {connect} from "react-redux";
import ActionCreatorGame from '../../redux/reducer/game/action-creator';
import {GameSettings} from './../../game-settings';
import GameOverScreen from '../game-over-screen/game-over-screen.jsx';
import GameWinScreen from '../game-win-screen/game-win-screen.jsx';
import {getStep, getMistakesCount} from './../../redux/reducer/game/selectors';
import {getQuestions} from './../../redux/reducer/data/selectors';
import {getAuthStatus} from './../../redux/reducer/user/selectors';
import AuthorizationScreen from '../authorization-screen/authorization-screen.jsx';
import ActionCreatorUser from './../../redux/reducer/user/operations';

class App extends PureComponent {
  _renderGame() {
    const {
      questions,
      step,
      mistakesCount,
      onWelcomeButtonClick,
      onAnswer,
      onResetGame,
      login,
      authorizationStatus
    } = this.props;
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
      if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
        return (
          <AuthorizationScreen
            onSubmit={login}
            onReplayButtonClick={onResetGame}
          />
        );
      } else {
        return (
          <GameWinScreen
            onButtonClick={onResetGame}
            mistakesCount={mistakesCount}
            questionsCount={questions.length}
          />
        );
      }
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
          <Route exact path="/dev-auth">
            <AuthorizationScreen
              onSubmit={() => {}}
              onReplayButtonClick={() => {}}
            />
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
  onResetGame: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  step: getStep(state),
  mistakesCount: getMistakesCount(state),
  questions: getQuestions(state),
  authorizationStatus: getAuthStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreatorGame.incrementStep());
  },
  onAnswer(question, answer) {
    dispatch(ActionCreatorGame.incrementMistakes(question, answer));
    dispatch(ActionCreatorGame.incrementStep());
  },
  onResetGame() {
    dispatch(ActionCreatorGame.resetGame());
  },
  login(authData) {
    dispatch(ActionCreatorUser.login(authData));
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
