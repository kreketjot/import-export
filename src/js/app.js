/* eslint-disable no-unused-vars */
import Game, {
  GameSavingData,
  readGameSaving as loadGame,
  writeGameSaving as saveGame,
} from './game';

console.log('worked');

const game = new Game();
game.start();
