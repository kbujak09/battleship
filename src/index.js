import Player from "./Player";
import { createBoard } from "./Dom"; 

const populateBoard = (board) => {
  const random = (number) => {
    return Math.floor(Math.random() * number);
  }
  const randomPos = () => {
    const random = Math.floor(Math.random() * 2);
    if (random == 1) {
      return 'horizontal';
    }
    else {
      return 'vertical';
    }
  }
  const lengths = [2, 3, 4, 4, 5];
  while (board.getBoard().length < 5) {
    let ship = board.addShip(lengths[lengths.length-1], random(9), random(9), randomPos())
    if (ship) {
      lengths.pop();
    }
  }
}

const player = Player();
const computer = Player();

populateBoard(computer.board);
populateBoard(player.board);

createBoard(playerBoard);
createBoard(computerBoard);

// while (!computer.board.isOver() && !player.board.isOver()) {
//   if (player.attack(computer, square)) {
//     computer.attack(player, player.getRandomSquare());
//   }
// }


 