/**
 * 
 * @param {number[]} potions
 * @param {number} target
 */
function createMagicPotion(potions, target) {
  /**
   * @type Map<number, number>
   */
  const seenBefore = new Map();

  let index = 0;
  for (const currentPotionValue of potions) {
    const complementValue = target - currentPotionValue;

    if (seenBefore.has(complementValue))
      return [seenBefore.get(complementValue), index];

    seenBefore.set(currentPotionValue, index);
    index++;
  }
}
