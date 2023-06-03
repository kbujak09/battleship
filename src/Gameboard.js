import Ship from './Ship.js'

const Gameboard = () => {

  const board = [];

  const getBoard = () => board;
  
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
      squares.forEach(sqr => {
        board.push(sqr);
      });
    }
    return;
  }


  return {
    getBoard,
    addShip
  }
}

export default Gameboard;