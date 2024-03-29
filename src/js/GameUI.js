import Image from  "../img/goblin.png"
export default class GameUI {
    constructor() {
      this.hit = false;
    }
  
    bindToDOM(container) {
      this.score = container.querySelector('.score');
      this.board = container.querySelector('.hole-board');
     
    }
  
    drawBoard(size) {
      let html = '';
      for (let i = 0; i < size ** 2; i++) {
        html += '<div class="hole"></div>';
      }
      this.board.innerHTML = html;
      // Если мышь с нажатой клавишей дёргается, click не возникает
      this.board.addEventListener('mousedown', (event) => this.shot(event));
  
      this.holes = this.board.querySelectorAll('.hole');
  
      this.goblin = document.createElement('img');
      this.goblin.src = Image;
      this.goblin.className = 'goblin';
    }
  
    drawGoblin(index) {
      this.holes[index].appendChild(this.goblin);
    }
  
    hideGoblin() {
      this.goblin.parentNode.innerHTML = '';
    }
  
    drawScore(hit, miss) {
      this.score.innerHTML = 
      `<h2 classname="score-text">Убито -  ${hit}</h2> 
       <h2 classname="score-text">Промах -   ${miss}</h2>`;
    }
  
    drawReady() {
      this.score.innerHTML = `<h2 classname="score-text">Внимание Старт!!!</h2>`;
    }
  
    shot(event) {
      this.hit = event.target === this.goblin
        || event.target === this.goblin.parentNode;
    }
  }