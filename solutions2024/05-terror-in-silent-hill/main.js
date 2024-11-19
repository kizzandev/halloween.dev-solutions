/**
 * 
 * @param {Array<Array<string>>} room
 */
function escapePyramidHead(room) {
  /**
   * @type string[]
   */
  const flatRoom = room.concat.apply([], room);
  const start = flatRoom.indexOf('▲');

  const map = new Map([[start, 0]]); // [index, steps]

  const target = flatRoom.indexOf('T');
  const SIZE = room.length;

  for (const [current, steps] of map) {
    for (const direction of [-SIZE, SIZE, -1, 1]) {
      const newIndex = current + direction;

      if (
        !map.has(newIndex) &&
        newIndex >= 0 &&
        newIndex < SIZE * SIZE &&
        !(current % SIZE === SIZE - 1 && direction === 1) &&
        flatRoom[newIndex] !== '#'
      ) {
        if (newIndex === target) return steps + 1;
        map.set(newIndex, steps + 1);
      }
    }
  }

  return -1;
}
