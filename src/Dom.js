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

const reRender = (playerHit, computerHit) => {

  const playerSquares = document.querySelectorAll('.playerSqr');
  const computerSquares = document.querySelectorAll('.computerSqr');

  playerSquares.forEach(sqr => {
    if (sqr.dataset.player == computerHit) {
      if (sqr.classList.contains('playerShip')) {
        sqr.classList.add('hit');
      }
      else {
        sqr.classList.add('miss');
      }
    }
  })
  computerSquares.forEach(sqr => {
    if (sqr.dataset.computer == playerHit) {
      if (sqr.classList.contains('computerShip')) {
        sqr.classList.add('hit');
      }
      else {
        sqr.classList.add('miss');
      }
    }
  })
}

const handleClick = (player, enemy, e) => {
  player.attack(enemy, [e.target.dataset.computer[0], e.target.dataset.computer[2]]);
  let computerHit = player.getRandomSquare();
  enemy.attack(player, computerHit);
  reRender([e.target.dataset.computer[0], e.target.dataset.computer[2]], computerHit)
}

const playGame = (player, enemy) => {
  const computerSquares = document.querySelectorAll('.computerSqr')
  computerSquares.forEach(sqr => {
    sqr.addEventListener('click', () => {
      handleClick(player, enemy, event);
      setTimeout(() => {
        if (player.board.isOver()) {
          alert('computer won');
        }
        else if (enemy.board.isOver()) {
          alert('player won');
        }
      }, 10);
    })
  })
}

export { createBoard, renderShips, populateBoard, playGame };
