import Player from "./Player";
import { createBoard, renderShips, takeInput, populateBoard, reRender } from "./Dom";

const player = Player();
const computer = Player();

populateBoard(computer.board);
populateBoard(player.board);

createBoard(playerBoard);
createBoard(computerBoard);

renderShips(player.board.getShips(), computer.board.getShips());

player.attack(computer, computer.getRandomSquare())
computer.attack(player, player.getRandomSquare())

reRender(player.board.getMissed(), player.board.getHits(), computer.board.getMissed(), computer.board.getHits())


