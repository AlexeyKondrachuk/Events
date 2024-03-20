/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/GameUI.js

class GameUI {
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
    this.board.addEventListener('mousedown', event => this.shot(event));
    this.holes = this.board.querySelectorAll('.hole');
    this.goblin = document.createElement('img');
    this.goblin.src = goblin_namespaceObject;
    this.goblin.className = 'goblin';
  }
  drawGoblin(index) {
    this.holes[index].appendChild(this.goblin);
  }
  hideGoblin() {
    this.goblin.parentNode.innerHTML = '';
  }
  drawScore(hit, miss) {
    this.score.innerHTML = `<h2 classname="score-text">Убито -  ${hit}</h2> 
       <h2 classname="score-text">Промах -   ${miss}</h2>`;
  }
  drawReady() {
    this.score.innerHTML = `<h2 classname="score-text">Внимание Старт!!!</h2>`;
  }
  shot(event) {
    this.hit = event.target === this.goblin || event.target === this.goblin.parentNode;
  }
}
;// CONCATENATED MODULE: ./src/js/GameControl.js
class GameControl {
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
;// CONCATENATED MODULE: ./src/js/app.js


const gameUI = new GameUI();
gameUI.bindToDOM(document.querySelector('.game-container'));
const gameCtrl = new GameControl(gameUI);
gameCtrl.init();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;