import { createGrid } from "./util.js";
import {startGameOfLife, current, reset, prevGeneration, nextGeneration, currentGeneration, totalGenerations } from "./gameOfLife.js"


const CELLSIZE = 20;
const DIV_HEIGHT = document.querySelector('.table-wrapper').scrollHeight;
const DIV_WIDTH = document.querySelector('.table-wrapper').scrollWidth;

const NUMROWS = Math.floor(DIV_HEIGHT/CELLSIZE);
const NUMCOLUMNS = Math.floor(DIV_WIDTH/CELLSIZE);


const table = createGrid(NUMROWS, NUMCOLUMNS, CELLSIZE, 1);
const rows = Array.from(table.rows);

let running = false;

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

const showStats = () => {
  document.querySelector("#currentStep").innerHTML = currentGeneration;
  document.querySelector("#totalStep").innerHTML = totalGenerations;
}

document.querySelector("#nextButton").addEventListener("click", () => {
  nextGeneration();
  repaint();
  showStats();
});

document.querySelector("#prevButton").addEventListener("click", () => {
  prevGeneration();
  repaint();
  showStats();
});

document.querySelector("#clearButton").addEventListener("click", () => {
  reset();
 repaint();
 showStats();
});

let interval;


const render = () => {
  nextGeneration();
  repaint();
  showStats();
}

const play = () => {
  if(!running) {
    togglePlayPause();
    running = !running;
     interval = setInterval(render, 1000);
  }
}

const pause = () => {
  if (running) {
    console.log('pausing')
    clearInterval(interval);
    togglePlayPause();
    running = !running;
  }
}

const togglePlayPause = () => {
  const btn = document.querySelector('#playPauseIcon');
  (!running) ? btn.classList.replace('fa-play', 'fa-pause') : btn.classList.replace('fa-pause', 'fa-play')
}

document.querySelector('#startButton').addEventListener('click', () => {
  (!running) ? play() : pause();
})

