import * as React from 'react';
import withActivePlayer from '../../hocs/with-active-player/with-active-player';
import {QuestionArtist, AnswerArtist} from '../../types';

interface Props {
  question: QuestionArtist;
  onAnswer: (question: QuestionArtist, answer: AnswerArtist) => void;
  renderPlayer: (src: string, id: number) => React.ReactNode;
}

const GuessArtistScreen: React.FC<Props> = (props: Props) => {
  const {question, onAnswer, renderPlayer} = props;
  const {song, answers} = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">

          {renderPlayer(song.src, 0)}

        </div>
      </div>

      <form className="game__artist">
        {answers.map((el) => {
          return (
            <div className="artist" key={el.id}>
              <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${el.id}`} id={`answer-${el.id}`} onChange={(evt) => {
                evt.preventDefault();
                onAnswer(question, el);
              }}/>
              <label className="artist__name" htmlFor={`answer-${el.id}`}>
                <img className="artist__picture" src={el.picture} alt={el.artist}/>
                {el.artist}
              </label>
            </div>
          );
        })}
      </form>
    </section>
  );
};

export const defaultGuessArtistScreen = GuessArtistScreen;
export default withActivePlayer(GuessArtistScreen);
