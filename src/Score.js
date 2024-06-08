export default class Score {
    constructor(game) {
      this.game = game;
      this.score = 0;
      this.missed = 0;
      this.scoreElement = document.getElementById('score');
      this.missedElement = document.getElementById('missed');
  
      if (!this.scoreElement || !this.missedElement) {
        throw new Error("Score or missed element not found in the DOM.");
      }
  
      this.update();
    }
  
    incrementScore() {
      this.score++;
      this.update();
    }
  
    incrementMissed() {
      this.missed++;
      if (this.missed >= 5) {
        this.game.endGame();
      }
      this.update();
    }
  
    update() {
      this.scoreElement.textContent = `Score: ${this.score}`;
      this.missedElement.textContent = `Missed: ${this.missed}`;
    }
  }
  