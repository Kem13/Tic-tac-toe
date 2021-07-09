import Game from "./Game.js"
import GameView from "./GameView.js";
let game = new Game();
let gameView = new GameView();
let tiles = document.querySelectorAll(".board-tile");

document.querySelector(".restart").addEventListener("click", ()=> {
    onRestartClick();
})

tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
})


function onTileClick(i) {
    // do soemthing
    game.makeMove(i)
    gameView.updateBoard(game);
    // game.nextTurn();
}

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
    let tile = document.querySelectorAll(".board-tile")
    tile.forEach((e) => {
        e.classList.remove("tile-winner")
    })


}

// gameView.updateBoard(game);