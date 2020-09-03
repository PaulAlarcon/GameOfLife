import { create2DArray, initArray } from "./util.js";

var NUMROWS;
var NUMCOLUMNS;

export let currentGeneration = 0;
export let totalGenerations = -1;
export let current;
let Generations = [];

const newGeneration = () => {
 totalGenerations++;
  return initArray(create2DArray(NUMROWS, NUMCOLUMNS))
};


export const nextGeneration = () => {
  Generations.push(newGeneration());
  for (let i = 0; i < Generations[currentGeneration].length; i++) {
    for (let j = 0; j < Generations[currentGeneration][0].length; j++) {
      let n = countNeighbours(i, j);
      if (n < 2) Generations[currentGeneration + 1][i][j] = 0;
      else if (n > 3) Generations[currentGeneration + 1][i][j] = 0;
      else if (Generations[currentGeneration][i][j] == 0 && n == 3)
        Generations[currentGeneration + 1][i][j] = 1;
      else {
        Generations[currentGeneration + 1][i][j] =
          Generations[currentGeneration][i][j];
      }
    }
  }
  current = Generations[++currentGeneration];
};

export const prevGeneration = () => {
  if (currentGeneration > 0) {
    currentGeneration--;
  }
  current = Generations[currentGeneration];
};

export const reset = () => {
  Generations = [];
  currentGeneration = 0;
  totalGenerations = -1;
  Generations.push(newGeneration());
  current = Generations[currentGeneration];
};

const countNeighbours = (x, y) => {
  let neighbors = 0;

  neighbors += check(x + 1, y);
  neighbors += check(x - 1, y);
  neighbors += check(x, y + 1);
  neighbors += check(x, y - 1);
  neighbors += check(x + 1, y + 1);
  neighbors += check(x + 1, y - 1);
  neighbors += check(x - 1, y + 1);
  neighbors += check(x - 1, y - 1);

  return neighbors;
};

const check = (x, y) =>
  x < 0 || y < 0 || x >= current.length || y >= current[0].length
    ? 0
    : current[x][y];

export const startGameOfLife = (r, c) => {
  NUMROWS = r;
  NUMCOLUMNS = c;
  Generations.push(newGeneration());
  current = Generations[currentGeneration];
};
