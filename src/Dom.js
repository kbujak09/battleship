const computerBoard = document.querySelector('#computerBoard');
const playerBoard = document.querySelector('#playerBoard');

const createBoard = (board) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const sqr = document.createElement('div');
      if (board.id == 'computerBoard') {
        sqr.classList.add('computerSqr');
      }
      else {
        sqr.classList.add('playerSqr');
      }
      sqr.classList.add('sqr');
      board.appendChild(sqr);
    }
  }
}


export { createBoard };
