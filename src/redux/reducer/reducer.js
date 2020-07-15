import {combineReducers} from 'redux';
import data from './data/data.js';
import game from './game/game.js';
import user from './user/user.js';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.GAME]: game,
  [NameSpace.USER]: user
});
