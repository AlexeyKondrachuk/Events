export default class GameControl {
    constructor(gameUI) {
      this.gameUI = gameUI;
    }
  
    init() {
      this.activeIndex = -1;
  
      this.size = 4;
      this.gameUI.drawBoard(this.size);
  
      this.start();
    }
  
    start() {
      this.hitCount = 0;
      this.hit = false;
      this.missCount = -1;
  
      this.gameUI.drawReady();
      this.timerID = setInterval(() => this.moveGoblin(), 1000);
    }
  
    moveGoblin() {
      const oldIndex = this.activeIndex;
      do {
        this.activeIndex = Math.trunc(Math.random() * this.size ** 2);
      } while (this.activeIndex === oldIndex);
  
      this.gameUI.drawGoblin(this.activeIndex);
  
      if (this.gameUI.hit) {
        this.hitCount++;
      } else {
        this.missCount++;
      }
      this.gameUI.hit = false;
  
      this.gameUI.drawScore(this.hitCount, this.missCount);
  
      if (this.missCount > 4) {
        clearInterval(this.timerID);
        this.gameUI.hideGoblin();
        setTimeout(() => {
          alert('Игра окончена');
          this.start();
        }, 0);
      }
    }
  }