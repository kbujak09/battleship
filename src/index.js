import Player from "./Player";
import { createBoard, renderShips, takeInput, populateBoard, reRender } from "./Dom";

const player = Player();
const computer = Player();

populateBoard(computer.board);
populateBoard(player.board);

createBoard(playerBoard);
createBoard(computerBoard);

renderShips(player.board.getShips(), computer.board.getShips());

const computerSquares = document.querySelectorAll('.computerSqr')

computerSquares.forEach(sqr => {
  sqr.addEventListener('click', (e) => {
    player.attack(computer, [e.target.dataset.computer[0], e.target.dataset.computer[2]]);
    let computerHit = player.getRandomSquare();
    computer.attack(player, computerHit);
    reRender([e.target.dataset.computer[0], e.target.dataset.computer[2]], computerHit)
  })
})