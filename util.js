const createGrid = (numx, numy, cellsize, cellspace) => {
  let table = document.createElement("TABLE");
  table.style.borderCollapse = 'separate';
  table.style.borderSpacing = cellspace+'px';
  table.numx = parseInt(numx);
  table.numy = parseInt(numy);
  for (let y = 0; y < table.numy; y++) {
    let tr = document.createElement("TR");
    table.appendChild(tr);
    for (let x = 0; x < table.numx; x++) {
      let td = document.createElement("TD");
      td.style.height = cellsize+'px';
      td.style.width = cellsize+'px';
      td.style.border = '1px solid black';
      td.style.cursor = 'pointer';
      td.conwayCell = {
        posX : x,
        posY : y,
        alive : false,
        neightbors : 0
      }; 
      td.addEventListener('click', (event) => {
        td.style.background = 'black';
        td.conwayCell.alive = true; 
        console.log(td.conwayCell); 
      });
      tr.appendChild(td);
    }
  }


  document.querySelector('main').appendChild(table);

  return table;
}


export {createGrid};