import './style.css';
import goblinImg from './goblin.png';

const boardSize = 4;
const board = document.getElementById('game-board');

//making gameboard
for (let i = 0; i < boardSize * boardSize; i++) {
  const cell = document.createElement('div');
  board.appendChild(cell);
}

const cells = Array.from(board.children);

let currentIndex = Math.floor(Math.random() * cells.length);
const goblin = document.createElement('img');
goblin.src = goblinImg;

cells[currentIndex].appendChild(goblin);

setInterval(() => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * cells.length);
  } while (newIndex === currentIndex);

  cells[currentIndex].removeChild(goblin);
  cells[newIndex].appendChild(goblin);
  currentIndex = newIndex;
}, 1000);