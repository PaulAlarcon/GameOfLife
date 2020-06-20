import {createGrid} from './util.js';

const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;
const CELL_SIZE = 25;
const CELL_SPACING = 2;

const table = createGrid(WINDOW_WIDTH/CELL_SIZE - CELL_SPACING, WINDOW_HEIGHT/CELL_SIZE - CELL_SPACING, CELL_SIZE, CELL_SPACING);


const checkIfAlive = (x, y) =>{
    return getCell(x, y).conwayCell.alive;
}

const getCell = (x, y) => {
  return table.childNodes[y].childNodes[x];
}


const getNumberOfNeighbors = (cell) =>{

  let numN = 0;
  let currentX = cell.conwayCell.posX;
  let currentY = cell.conwayCell.posY;

  if(currentY + 1 < table.numy){
    if(checkIfAlive(currentX, currentY + 1)) numN++; //bottom
  }
  if(currentX + 1 < table.numx){
    if(checkIfAlive(currentX + 1, currentY)) numN++; //right
  }
  if(currentY - 1 >= 0){
    if(checkIfAlive(currentX, currentY - 1)) numN++; //top
  }
  if(currentX - 1 >= 0){
    if(checkIfAlive(currentX - 1, currentY)) numN++; //right
  }

  // if(getCell(currentX - 1, currentY) && getCell(currentX - 1, currentY).conwayCell.alive) numN++; //left
  // if(getCell(currentX + 1, currentY) && getCell(currentX + 1, currentY).conwayCell.alive) numN++; //right
  // if(getCell(currentX, currentY + 1) && getCell(currentX, currentY + 1).conwayCell.alive) numN++; //top
  // if(getCell(currentX, currentY - 1) && getCell(currentX, currentY - 1).conwayCell.alive) numN++; //bottom
  // if(getCell(currentX - 1, currentY + 1) && getCell(currentX - 1, currentY - 1).conwayCell.alive) numN++; //top-left
  // if(getCell(currentX - 1, currentY + 1) && getCell(currentX + 1, currentY + 1).conwayCell.alive) numN++; //top-right
  // if(getCell(currentX - 1, currentY + 1) && getCell(currentX - 1, currentY - 1).conwayCell.alive) numN++; //bottom-left
  // if(getCell(currentX + 1, currentY + 1) && getCell(currentX + 1, currentY + 1).conwayCell.alive) numN++; //bottom-right
  cell.conwayCell.neightbors = numN;
  return numN;
}


const start = () =>{
  console.log('Welcome to the game of life.');
  setInterval(() => {
    // console.log('Checking');
    // console.log((0, 0));
    // console.log(getNumberOfNeighbors(getCell(0,0)));
    tick();
  }, 1000);
}

const tick = () => {
  for(let i = 0; i < 4; i++)
  for(let j = 0; j < 4; j++){
    console.log(getCell(j,i).conwayCell);
    check(getCell(j, i))
  }
}



const die = (cell) => {
  cell.style.background = 'white';
  cell.conwayCell.alive = false;
}

const comeback = (cell) => {
  cell.style.background = 'black';
  cell.conwayCell.alive = true;
}

const check = (cell) => {
  let numN = getNumberOfNeighbors(cell);
  if(numN == 0 || numN == 1)
    die(cell);
  else if(numN == 4)
    die(cell);
  else if(cell.dead && numN == 3)
    comeback(cell);
}


const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', () => {
  start();
})




