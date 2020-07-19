import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute} from './../../constants';
import {Link} from 'react-router-dom';

const GameWinScreen = (props) => {
  const {onButtonClick, questionsCount, mistakesCount} = props;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {questionsCount} вопросов и совершили {mistakesCount} ошибки</p>
      <Link
        to={AppRoute.ROOT}
        className="replay"
        onClick={onButtonClick}
      >Сыграть ещё раз</Link>
    </section>
  );
};

GameWinScreen.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  questionsCount: PropTypes.number.isRequired,
  mistakesCount: PropTypes.number.isRequired
};

export default GameWinScreen;
