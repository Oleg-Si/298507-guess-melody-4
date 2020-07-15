import ActionCreator from './action-creator';
import {GameType} from '../../../constants';
import {createArtistQuestions, createGenreQuestions} from '../../../adapter';

const Operations = {
  loadQuestions: () => (dispatch, getState, api) => {
    return api.get(`/questions`)
      .then((response) => {
        const formattedData = response.data.map((el) => {
          if (el.type === GameType.ARTIST) {
            return createArtistQuestions(el);
          } else if (el.type === GameType.GENRE) {
            return createGenreQuestions(el);
          }

          return el;
        });

        dispatch(ActionCreator.loadQuestions(formattedData));
      });
  }
};

export default Operations;
