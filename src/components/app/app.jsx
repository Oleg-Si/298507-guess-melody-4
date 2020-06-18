import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GuessArtistScreen from '../guess-artist-screen/guess-artist-screen.jsx';
import GuessGenreScreen from '../guess-genre-screen/guess-genre-screen.jsx';
import {GameType} from './../../constants';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: -1
    };
  }

  _renderGame() {
    const {questions} = this.props;
    const currentScreen = this.state.currentScreen;
    const data = questions[currentScreen];

    if (currentScreen === -1 || currentScreen >= questions.length) {
      return (
        <WelcomeScreen
          onWelcomeButtonClick={() => this.setState({currentScreen: 0})}
        />
      );
    }

    if (data) {
      switch (data.type) {
        case GameType.ARTIST:
          return (
            <GuessArtistScreen
              data={data}
              onAnswer={() => this.setState((prevState) => ({currentScreen: prevState.currentScreen + 1}))}
            />
          );
        case GameType.GENRE:
          return (
            <GuessGenreScreen
              data={data}
              onAnswer={() => this.setState((prevState) => ({currentScreen: prevState.currentScreen + 1}))}
            />
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
            <GuessArtistScreen
              data={questions[0]}
              onAnswer={() => {}}
            />
          </Route>
          <Route exact path="/genre">
            <GuessGenreScreen
              data={questions[1]}
              onAnswer={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  questions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired
      })
  )
};

export default App;
