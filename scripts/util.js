const createGrid = (rows, columns, cellsize, cellspace) => {
  let table = document.createElement("TABLE");
  table.style.borderCollapse = 'separate';
  table.style.borderSpacing = cellspace+'px';
  table.num_rows = parseInt(rows);
  table.num_columns = parseInt(columns);
  for (let x = 0; x < rows; x++) {
    let tr = document.createElement("TR");
    table.appendChild(tr);
    for (let y = 0; y < columns; y++) {
      let td = document.createElement("TD");
      td.style.height = cellsize+'px';
      td.style.width = cellsize+'px';
      // td.style.border = '1px solid black';
      td.style.cursor = 'pointer';
      td.x = x;
      td.y = y;
      tr.appendChild(td);
    }
  }
  document.querySelector('.table-wrapper').appendChild(table);
  return table;
}

const create2DArray = (rows, columns) => {
  let arr = new Array(rows)
  for(let i = 0; i < rows; i++ ) arr[i] = new Array(columns);
  return arr;
}

const initArray = arr => {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[0].length; j++){
      arr[i][j] = 0;
    }
  }
  return arr;
}

export {createGrid, initArray, create2DArray};