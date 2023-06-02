import Ship from "../src/Ship"

let ship;

beforeEach(() => {
  ship = Ship(4);
})

test('ship gets a hit', () => {
  ship.hit();
  expect(ship.hitCount()).toBe(1);
});

test('ship gets multiple hits', () => {
  ship.hit();
  ship.hit();
  expect(ship.hitCount()).toBe(2);
});

test('ship is sunk', () => {
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toEqual(true);
});

test('ship is not sunk', () => {
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toEqual(false);
});

