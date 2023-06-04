import Gameboard from "./Gameboard";

const Player = () => {

  const board = Gameboard();

  const attack = (enemy, square) => {
    enemy.board.receiveAttack(square);
  }

  const getRandomSquare = () => {
    const moves = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        moves.push([i, j]);
      }
    }
    return moves.splice(Math.floor(Math.random() * moves.length), 1);
  }

  return {
    board,
    attack,
    getRandomSquare,
  }
}

export default Player;