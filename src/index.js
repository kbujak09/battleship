import Player from "./Player";
import { createBoard, renderShips, populateBoard, playGame } from "./Dom";

const player = Player();
const computer = Player();

populateBoard(computer.board);
populateBoard(player.board);

createBoard(playerBoard);
createBoard(computerBoard);

renderShips(player.board.getShips(), computer.board.getShips());
 
playGame(player, computer);



