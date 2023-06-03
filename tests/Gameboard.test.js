import Gameboard from '../src/Gameboard';

let gameboard;

beforeEach(() => {
  gameboard = Gameboard();
});

test('place ship', () => {
  gameboard.addShip(4, 3, 3, 'horizontal');
  expect(gameboard.getBoard()).toEqual([[3,3], [3,4], [3,5], [3,6]])
});

test('doesnt place invalid horizontal ship', () => {
  gameboard.addShip(4, 7, 2, 'horizontal');
  expect(gameboard.getBoard()).toEqual([]);
});

test('doesnt place invalid vertical ship', () => {
  gameboard.addShip(4, 2, 2, 'vertical');
  expect(gameboard.getBoard()).toEqual([]);
});