const createBoard = (board) => {
  const computerBoard = document.querySelector('#computerBoard');
  const playerBoard = document.querySelector('#playerBoard');
  for (let i = 9; i >= 0; i--) {
    for (let j = 0; j < 10; j++) {
      const sqr = document.createElement('div');
      if (board.id == 'computerBoard') {
        sqr.classList.add('computerSqr');
        sqr.dataset.computer = [i, j];
      }
      else {
        sqr.classList.add('playerSqr');
        sqr.dataset.player = [i, j];
      }
      sqr.classList.add('sqr');
      board.appendChild(sqr);
    }
  }
}

const renderShips = (playerShips, computerShips) => {
  const playerSquares = document.querySelectorAll('.playerSqr');
  const computerSquares = document.querySelectorAll('.computerSqr');
  playerSquares.forEach(sqr => {
    for (let ship of playerShips) {
      if (ship == sqr.dataset.player) {
        sqr.classList.add('playerShip');
      }
    }
  })
  computerSquares.forEach(sqr => {
    for (let ship of computerShips) {
      if (ship == sqr.dataset.computer) {
        sqr.classList.add('computerShip');
      }
    }
  })
}

const takeInput = () => {
  const computerSquares = document.querySelectorAll('.computerSqr');
  computerSquares.forEach(sqr => {
    sqr.addEventListener('click', (e) => {
      return [e.target.dataset.computer[0], e.target.dataset.computer[2]];
    })
  })
}

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
    let ship = board.addShip(lengths[lengths.length-1], random(9), random(9), randomPos());
    if (ship) {
      lengths.pop();
    }
  }
}

const reRender = (playerMissed, playerHits, computerMissed, computerHits) => {
  const playerSquares = document.querySelectorAll('.playerSqr');
  const computerSquares = document.querySelectorAll('.computerSqr');

  playerSquares.forEach(sqr => {
    playerMissed.forEach(miss => {
      if (miss == sqr.dataset.player) {
        sqr.classList.add('missComputer');
      }
    })
    playerHits.forEach(hit => {
      if (hit == sqr.dataset.player) {
        sqr.classList.add('hitComputer');
      }
    })
  })
  computerSquares.forEach(sqr => {
    computerMissed.forEach(miss => {
      if (miss == sqr.dataset.computer) {
        sqr.classList.add('miss');
      }
    })
    computerHits.forEach(hit => {
      if (hit == sqr.dataset.computer) {
        sqr.classList.add('hit');
      }
    })
  })
}


export { createBoard, renderShips, takeInput, populateBoard, reRender };
