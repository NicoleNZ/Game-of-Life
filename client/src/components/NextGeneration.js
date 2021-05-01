import { findNeighbours } from "../constants";

export const nextGeneration = (grid) => {
  // grid has multiple rows, each row has cells
  // map over each row
  return grid.map((row, i) => {
    // map over each cell in a row
    return row.map((cell, j) => {
      let numberOfAliveNeighbours = 0;
      // find total number of neighbours for a given cell
      findNeighbours.forEach((e) => {
        const loc1 = i + e[0];
        const loc2 = j + e[1];

        // valid neighbours are only when i/j is greater or equal to 0
        // if row (grid[loc1]) is undefined then they wont hav eany cells
        if (loc1 >= 0 && loc2 >= 0 && grid[loc1] !== undefined) {
          const thisNeighbour = grid[loc1][loc2];
          if (thisNeighbour) {
            numberOfAliveNeighbours++;
          }
        }
        // console.log("number of alive neighbours", numberOfAliveNeighbours);
      });

      // apply rules, return true if cell should remain alive, false if not
      if (
        (numberOfAliveNeighbours === 2 || numberOfAliveNeighbours === 3) &&
        cell
      ) {
        return true;
      } else if (numberOfAliveNeighbours < 2 || numberOfAliveNeighbours > 3) {
        return false;
      } else if (numberOfAliveNeighbours === 3 && !cell) {
        return true;
      }
      return cell;
    });
  });
};
