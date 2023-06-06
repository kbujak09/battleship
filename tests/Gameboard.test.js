import Gameboard from '../src/Gameboard';
import Ship from '../src/Ship';

let gameboard;
let ship;

beforeEach(() => {
  gameboard = Gameboard();
});

test('place ship', () => {
  gameboard.addShip(4, 3, 3, 'horizontal');
  expect(gameboard.getBoard().toString()).toEqual([{ship: Ship(4), position: [[3,3], [3,4], [3,5], [3,6]]}].toString())
});

test('doesnt place invalid horizontal ship', () => {
  gameboard.addShip(4, 2, 7, 'horizontal');
  expect(gameboard.getBoard()).toEqual([]);
});

test('doesnt place invalid vertical ship', () => {
  gameboard.addShip(4, 2, 2, 'vertical');
  expect(gameboard.getBoard()).toEqual([]);
});

test('doesnt place overlapping ships', () => {
  gameboard.addShip(4, 3, 3, 'horizontal');
  gameboard.addShip(4, 6, 4, 'vertical');
  console.log(gameboard.getShips())
  expect(gameboard.getBoard().toString()).toEqual([{ship: Ship(4), position: [[3,3], [3,4], [3,5], [3,6]]}].toString())
});

test('ship receives attack', () => {
  ship = gameboard.addShip(4,3,3, 'horizontal');
  gameboard.receiveAttack([3,4]);
  expect(ship.deck.hitCount()).toBe(1);
});

test('gameboard collects missed shot', () => {
  gameboard.receiveAttack([3,4]);
  expect(gameboard.getMissed().toString()).toEqual([3,4].toString());
});

test('gameboard checks if all ships are not sunk', () => {
  gameboard.addShip(2, 3, 3, 'horizontal');
  gameboard.receiveAttack([3,4]);
  expect(gameboard.isOver()).toBe(false);
});

test('gameboard checks if all ships are sunk', () => {
  gameboard.addShip(2, 3, 3, 'horizontal');
  gameboard.receiveAttack([3,3]);
  gameboard.receiveAttack([3,4]);
  expect(gameboard.isOver()).toBe(true);
});