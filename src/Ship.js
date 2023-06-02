const Ship = (length) => {
  let hits = 0;
  const hit = () => hits++;
  const hitCount = () => hits;
  const isSunk = () => hits >= length ? true : false;

  return {
    length,
    hit,
    hitCount,
    isSunk,
  }
}

export default Ship