import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GuessArtistScreen from '../guess-artist-screen/guess-artist-screen.jsx';
import GuessGenreScreen from '../guess-genre-screen/guess-genre-screen.jsx';

const App = (props) => {
  const {errorsCount, onWelcomeButtonClick} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen
            errorsCount={errorsCount}
            onWelcomeButtonClick={onWelcomeButtonClick}
          />
        </Route>
        <Route exact path="/artist">
          <GuessArtistScreen />
        </Route>
        <Route exact path="/genre">
          <GuessGenreScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired
};

export default App;
