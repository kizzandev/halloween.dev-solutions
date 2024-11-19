/**
 *
 * @param {Array<Array<number>>} dream
 */
function findSafestPath(dream) {
  const lenCol = dream.length;
  const lenRow = dream[0].length;

  /**
   * @type number[]
   */
  const dreamPath = new Array(lenRow);

  dreamPath[0] = dream[0][0];

  for (let row = 1; row < lenRow; row++)
    dreamPath[row] = dreamPath[row - 1] + dream[0][row];

  for (let col = 1; col < lenCol; col++) {
    dreamPath[0] += dream[col][0];

    for (let row = 1; row < lenRow; row++) {
      dreamPath[row] =
        dream[col][row] + Math.min(dreamPath[row], dreamPath[row - 1]);
    }
  }

  return dreamPath[lenRow - 1];
}
