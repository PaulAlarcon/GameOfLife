import { create2DArray, initArray } from "./util.js";

var NUMROWS;
var NUMCOLUMNS;



let currentGeneration = 0;
let Generations = [];

const newGeneration = () => initArray(create2DArray(NUMROWS, NUMCOLUMNS)) ;

export let current;

export const nextGeneration = () => {
console.log(current);
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
  console.log(current);
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
  Generations.push(newGeneration());
  current = Generations[currentGeneration];

  console.log(current);
};

const countNeighbours = (x, y) => {
    let neighbors = 0;
    let arr = Generations[currentGeneration];
  
    if (x + 1 < arr.length) {
      if (arr[x + 1][y] == 1) neighbors++;
  
      if (y + 1 < arr[x].length) 
        if (arr[x + 1][y + 1] == 1) neighbors++;
    
      if (y - 1 >= 0) 
        if (arr[x + 1][y - 1] == 1) neighbors++;
      
    }
  
    if (x - 1 >= 0) {
      if (arr[x - 1][y] == 1) neighbors++;
  
      if (y + 1 < arr[x].length) 
        if (arr[x - 1][y + 1] == 1) neighbors++;
  
      if (y - 1 >= 0) 
        if (arr[x - 1][y - 1] == 1) neighbors++;
    }
  
    if (y + 1 < arr[x].length) 
        if (arr[x][y + 1] == 1) neighbors++;
  
    if (y - 1 >= 0)  
        if (arr[x][y - 1] == 1) neighbors++;
  
    return neighbors;
  };
  
  export const startGameOfLife = (r, c) => {
    NUMROWS = r;
    NUMCOLUMNS = c;
    Generations.push(newGeneration());
    current = Generations[currentGeneration];
}