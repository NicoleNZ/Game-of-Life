export const FirstGeneration = () => {
  const gameOfLifeObjectArray = [];

  for (let i = 0; i < 25; i++) {
    const row = [];
    for (let j = 0; j < 25; j++) {
      // 50/50 chance of cell being alive or dead
      // Math.random() always generates a value between 0 to 1 for e.g. 0.2 or 0.78
      // there's a 50% chance it will be higher than 0.5
      // increasing the 0.5 value will give you a higher probability of dead cells and vice versa
      const cell = Math.random() < 0.5;

      row.push(cell);
    }
    gameOfLifeObjectArray.push(row);
  }
  return gameOfLifeObjectArray;
};
