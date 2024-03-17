import GameUI from './GameUI';
import GameControl from './GameControl';

const gameUI = new GameUI();
gameUI.bindToDOM(document.querySelector('.game-container'));

const gameCtrl = new GameControl(gameUI);
gameCtrl.init();