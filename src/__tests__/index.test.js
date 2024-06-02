import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


const { window } = new JSDOM(html);
global.document = window.document;

import '../style.css'; 
import goblinImg from '../goblin.png';
import { moveGoblin } from '../index';

describe('moveGoblin', () => {
  let cells;
  let goblin;

  beforeEach(() => {
    const board = document.createElement('div');
    board.id = 'game-board';
    document.body.appendChild(board);

    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      board.appendChild(cell);
    }

    cells = Array.from(board.children);

    goblin = document.createElement('img');
    goblin.src = goblinImg;

    const initialIndex = Math.floor(Math.random() * cells.length);
    cells[initialIndex].appendChild(goblin);
  });

  test('should move the goblin to a new cell', () => {
    const initialIndex = cells.findIndex(cell => cell.contains(goblin));

    moveGoblin();

    const newIndex = cells.findIndex(cell => cell.contains(goblin));

    expect(newIndex).not.toBe(initialIndex);
    expect(cells[newIndex].contains(goblin)).toBe(true);
  });
});