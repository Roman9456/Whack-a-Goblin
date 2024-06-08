export default class Board {
    constructor(size) {
      this.size = size;
      this.gameContainer = document.getElementById('game-container');
      this.createBoard();
    }
  
    createBoard() {
      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.dataset.x = i;
          cell.dataset.y = j;
          this.gameContainer.appendChild(cell);
        }
      }
    }
  
    getCell(x, y) {
      return document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    }
  }
  