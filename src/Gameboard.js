import Ship from './Ship';

const Gameboard = () => {

  const board = [];

  const getBoard = () => board;

  const missed = [];

  const getMissed = () => missed;
  
  const addShip = (length, x, y, position) => {
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
      board.push({ ship: squares });
    }
    return;
  }

  const receiveAttack = (square) => {
    
  }

  return {
    getBoard,
    addShip,
    getMissed,
  }
}

export default Gameboard;