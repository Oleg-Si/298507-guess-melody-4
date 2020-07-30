import * as React from 'react';
import {AppRoute} from '../../constants';
import Mistakes from '../mistakes/mistakes';
import {Link} from 'react-router-dom';
import {GameType} from '../../types';

interface Props {
  type: GameType;
  children: React.ReactNode;
  mistakesCount: number;
  onButtonClick: () => void;
}

const svgCircleStyles = {
  filter: `url(#blur)`,
  transform: `rotate(-90deg) scaleY(-1)`,
  transformOrigin: `center`
};

const GameScreen: React.FC<Props> = (props: Props) => {
  const {type, children, mistakesCount, onButtonClick} = props;

  return (
    <section className={`game game--${type}`}>
      <header className="game__header">
        <Link
          to={AppRoute.ROOT}
          onClick={onButtonClick}
          className="game__back"
        >
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </Link>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={svgCircleStyles}/>
        </svg>

        <Mistakes mistakesCount={mistakesCount} />
      </header>

      {children}
    </section>
  );
};

export default GameScreen;
