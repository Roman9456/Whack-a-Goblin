import goblinImg from './goblin.png';

export default class Goblin {
  constructor(board, game) {
    this.board = board;
    this.game = game;
    this.position = { x: 0, y: 0 };
    this.element = this.createGoblinElement();
  }

  createGoblinElement() {
    const goblin = document.createElement('img');
    goblin.src = goblinImg;
    goblin.alt = 'Goblin';
    goblin.classList.add('goblin');
    goblin.style.cursor = 'url("hammer.png"), auto'; // Assuming you have hammer.png for the custom cursor
    goblin.addEventListener('click', () => this.handleClick());
    return goblin;
  }

  getRandomPosition() {
    return {
      x: Math.floor(Math.random() * this.board.size),
      y: Math.floor(Math.random() * this.board.size)
    };
  }

  show() {
    const newPosition = this.getRandomPosition();
    this.position = newPosition;
    const newCell = this.board.getCell(newPosition.x, newPosition.y);
    newCell.appendChild(this.element);
    
    this.timeoutId = setTimeout(() => {
      this.remove();
      this.game.incrementMissed();
    }, 1000);
  }

  handleClick() {
    this.game.incrementScore();
    this.remove();
  }

  remove() {
    clearTimeout(this.timeoutId);
    if (this.element.parentElement) {
      this.element.parentElement.removeChild(this.element);
    }
  }
}
