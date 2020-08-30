import { createGrid } from "./util.js";
import {startGameOfLife, current, reset, prevGeneration, nextGeneration} from "./gameOfLife.js"

const NUMROWS = 20;
const NUMCOLUMNS = 50;

const table = createGrid(NUMROWS, NUMCOLUMNS, 10, 1);
const rows = Array.from(table.rows);

startGameOfLife(NUMROWS, NUMCOLUMNS);

rows.forEach((e) =>
  e.addEventListener("click", (evt) => {
    let x = evt.target.x;
    let y = evt.target.y;
    if (current[x][y] == 1) {
      evt.target.style.backgroundColor = "white";
      current[x][y] = 0;
    } else {
      evt.target.style.backgroundColor = "black";
      current[x][y] = 1;
    }
  })
);

const repaint = () => {
  for (let i = 0; i < current.length; i++) 
    for (let j = 0; j < current[0].length; j++) {
      rows[i].childNodes[j].style.backgroundColor =
      current[i][j] == 1 ? "black" : "white";
    }
};

document.querySelector(".nextButton").addEventListener("click", () => {
  nextGeneration();
  repaint();
});

document.querySelector(".prevButton").addEventListener("click", () => {
  prevGeneration();
  repaint();
});

document.querySelector(".clearButton").addEventListener("click", () => {
  reset();
 repaint();
});

let interval;
// document.querySelector('.startButton').addEventListener('click', () => {
//   interval = setInterval()
// })
