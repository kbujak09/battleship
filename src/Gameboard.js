import Ship from './Ship';

const Gameboard = () => {

  const occupied = [];

  const getOccupied = () => occupied;

  const board = [];

  const getBoard = () => board;

  const missed = [];

  const getMissed = () => missed;
  
  const addShip = (length, y, x, position) => {
    if (position == 'vertical' && y+1 < length || position == 'horizontal' && x + length > 9) {
      return;
    }
    else {
      const squares = [];
      if (position == 'vertical') {
        for (let i = 0; i < length; i++) {
          squares.push([y-i, x]);
        }
      }
      else if (position == 'horizontal') {
        for (let i = 0; i < length; i++) {
          squares.push([y, x+i]);
        }
      }
      for (let sqr of squares) {
        if (getOccupied().toString().includes(sqr.toString())) {
          return;
        }
        else {
          const ship = { deck: Ship(length), position: squares }
          board.push(ship);
          for (let pos of ship.position) {
            occupied.push([pos[0]+1, pos[1]-1], [pos[0]+1, pos[1]], [pos[0]+1, pos[1]+1], 
                          [pos[0], pos[1]-1], [pos[0], pos[1]], [pos[0], pos[1]+1],
                          [pos[0]-1, pos[1]-1], [pos[0]-1, pos[1]], [pos[0]-1, pos[1]+1])
          }  
          return ship;
        }
      }
    }
  }

  const receiveAttack = (square) => {
    for (let ship of getBoard()) {
      if (ship.position.toString().includes(square.toString())) {
        return ship.deck.hit();
      }
    }
    missed.push(square);
  }

  const isOver = () => {
    for (let ship of getBoard()) {
      if (!ship.deck.isSunk()) {
        return false;
      }
    }
    return true;
  }

  return {
    getBoard,
    addShip,
    getMissed,
    receiveAttack,
    getOccupied,
    isOver,
  }
}

export default Gameboard;