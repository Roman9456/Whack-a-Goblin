import './style.css';
import goblinImg from './goblin.png';

const boardSize = 4; // Size of the game board
let playerPosition = { x: 0, y: 0 }; // Initial position of the player

// Function to generate random position on the board
const getRandomPosition = () => {
    return {
        x: Math.floor(Math.random() * boardSize),
        y: Math.floor(Math.random() * boardSize)
    };
};

// Function to create the game board
const createBoard = () => {
    const gameContainer = document.getElementById('game-container');
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = i;
            cell.dataset.y = j;
            gameContainer.appendChild(cell);
        }
    }
};

// Function to place the player at a random position on the board
const placePlayer = () => {
    const player = document.createElement('img');
    player.src = goblinImg;
    player.alt = 'Goblin';
    const randomPosition = getRandomPosition();
    playerPosition = randomPosition;
    const cell = document.querySelector(`[data-x="${randomPosition.x}"][data-y="${randomPosition.y}"]`);
    cell.appendChild(player);
};

// Function to move the player to a random position on the board
const movePlayer = () => {
    let newPosition;
    do {
        newPosition = getRandomPosition();
    } while (newPosition.x === playerPosition.x && newPosition.y === playerPosition.y);

    const newCell = document.querySelector(`[data-x="${newPosition.x}"][data-y="${newPosition.y}"]`);
    newCell.appendChild(document.querySelector('img'));

    playerPosition = newPosition;
};

createBoard();
placePlayer();
setInterval(movePlayer, 1000); // Move player every second

