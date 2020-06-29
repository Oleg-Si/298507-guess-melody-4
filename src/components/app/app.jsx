import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GuessArtistScreen from '../guess-artist-screen/guess-artist-screen.jsx';
import GuessGenreScreen from '../guess-genre-screen/guess-genre-screen.jsx';
import {GameType} from './../../constants';
import GameScreen from '../game-screen/game-screen.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: -1
    };

    this._incScreen = this._incScreen.bind(this);
  }

  _incScreen() {
    this.setState((prevState) => ({currentScreen: prevState.currentScreen + 1}));
  }

  _renderGame() {
    const {questions} = this.props;
    const currentScreen = this.state.currentScreen;
    const question = questions[currentScreen];

    if (currentScreen === -1 || currentScreen >= questions.length) {
      return (
        <WelcomeScreen onWelcomeButtonClick={() => this.setState({currentScreen: 0})} />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen type={question.type}>
              <GuessArtistScreen
                question={question}
                onAnswer={this._incScreen}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen type={question.type}>
              <GuessGenreScreen
                question={question}
                onAnswer={this._incScreen}
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
            <GameScreen type={GameType.ARTIST}>
              <GuessArtistScreen
                question={questions[1]}
                onAnswer={() => {}}
              />
            </GameScreen>
          </Route>
          <Route exact path="/genre">
            <GameScreen type={GameType.GENRE}>
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
  questions: PropTypes.array.isRequired
};

export default App;
