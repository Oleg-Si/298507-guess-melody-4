import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {errorsCount, onWelcomeButtonClick} = props;

  return <WelcomeScreen
    errorsCount={errorsCount}
    onWelcomeButtonClick={onWelcomeButtonClick}
  />;
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired
};

export default App;
