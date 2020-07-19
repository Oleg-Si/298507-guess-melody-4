import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Router, Route, Switch} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GuessArtistScreen from '../guess-artist-screen/guess-artist-screen.jsx';
import GuessGenreScreen from '../guess-genre-screen/guess-genre-screen.jsx';
import {GameType, AuthorizationStatus, AppRoute} from './../../constants';
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
import history from './../../history';
import PrivateRoute from './../private-route/private-route.jsx';

class App extends PureComponent {
  _renderGameScreen() {
    const {
      questions,
      step,
      mistakesCount,
      onWelcomeButtonClick,
      onAnswer,
      goHome,
      authorizationStatus
    } = this.props;
    const question = questions[step];

    if (step === -1) {
      return (
        <WelcomeScreen onWelcomeButtonClick={onWelcomeButtonClick} />
      );
    }

    if (mistakesCount >= GameSettings.MAX_MISTAKES_COUNT) {
      return history.push(AppRoute.LOSE);
    }

    if (step >= questions.length) {
      if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
        return history.push(AppRoute.LOGIN);
      } else {
        return history.push(AppRoute.RESULT);
      }
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen
              type={question.type}
              mistakesCount={mistakesCount}
              onButtonClick={goHome}
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
              onButtonClick={goHome}
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
    const {
      questions,
      mistakesCount,
      onResetGame,
      login
    } = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            {this._renderGameScreen()}
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <AuthorizationScreen
              onSubmit={login}
              onReplayButtonClick={onResetGame}
            />
          </Route>
          <Route exact path={AppRoute.LOSE}>
            <GameOverScreen onButtonClick={onResetGame} />
          </Route>
          <PrivateRoute
            exact
            path={AppRoute.RESULT}
            render={() => {
              return (
                <GameWinScreen
                  onButtonClick={onResetGame}
                  mistakesCount={mistakesCount}
                  questionsCount={questions.length}
                />
              );
            }}
          />
        </Switch>
      </Router>
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
  goHome: PropTypes.func.isRequired,
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
    dispatch(ActionCreatorGame.resetGame(0));
  },
  goHome() {
    dispatch(ActionCreatorGame.resetGame(-1));
  },
  login(authData) {
    dispatch(ActionCreatorUser.login(authData));
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
