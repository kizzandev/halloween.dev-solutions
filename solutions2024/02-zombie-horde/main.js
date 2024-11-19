function battleHorde(zombies, humans) {
  let result = 0
  for (let index = 0; index < zombies.length; index++)
    result += humans[index] - zombies[index]

  if (!result) return 'x';
  else if (result > 0) return `${result}h`;
  else return `${-result}z`;
}
