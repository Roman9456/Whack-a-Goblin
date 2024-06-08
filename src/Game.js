import Board from './Board';
import Goblin from './Goblin';
import Score from './Score';

export default class Game {
  constructor(boardSize) {
    this.board = new Board(boardSize);
    this.score = new Score(this);
    this.goblin = new Goblin(this.board, this);
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      this.goblin.show();
    }, 1000);
  }

  incrementScore() {
    this.score.incrementScore();
  }

  incrementMissed() {
    this.score.incrementMissed();
  }

  endGame() {
    clearInterval(this.interval);
    alert('Game Over!');
  }
}
