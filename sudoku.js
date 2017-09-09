let goodSudokuData = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

let badSudokuData = [
  [5,3,4,6,7,8,9,3,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,4,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,8,1,9,6,3,5],
  [3,4,5,2,8,6,2,7,9]
];

const checkRow = (indexOfRow, sudokuGrid) => {
  const row = sudokuGrid[indexOfRow];
  return verifyArray(row);
};

const checkRows = (sudokuGrid) => {
  for(let i =0; i < sudokuGrid.length; i++) {
    if(!checkRow(i, sudokuGrid)) {
      return false;
    }
  }
  return true;
};

const verifyArray = (arrayToCheck) => {
  const sortedArray = arrayToCheck.sort();
  if (sortedArray.length > 9) return false;
  for (let i = 1; i <= 9 ; i++ ) {
    if (sortedArray[i - 1] !== i) {
      return false;
    }
  }
  return true;
};

const checkColumn = (indexOfColumn, sudokuGrid) => {
  const columnArray = [];
  for(let i = 0; i < 9; i++) {
    columnArray.push((sudokuGrid[i])[indexOfColumn]);
  }
  return verifyArray(columnArray);
};

const checkColumns = (sudokuGrid) => {
  for(let i =0; i < sudokuGrid.length; i++) {
    if(!checkColumn(i, sudokuGrid)) {
      return false;
    }
  }
  return true;
};

const checkGrid = (indexOfGrid, sudokuGrid) => {
  //3x3 area and put into an array to check
  //9x9
  //x coordinate
  const xCoord = (indexOfGrid % 3) * 3;
  // this will get the x coordinate in the sudoku
  const yCoord = Math.floor(indexOfGrid / 3) * 3;
  // this will get the y coordinate to start in the sudoku
  const gridArray = [];
  for (let i = xCoord; i < (xCoord + 3); i++) {
    for (let j = yCoord; j < (yCoord + 3); j++) {
      gridArray.push((sudokuGrid[i])[j]);
    }
  }
  return verifyArray(gridArray);
};

const checkGrids = (sudokuGrid) => {
  for(let i =0; i < sudokuGrid.length; i++) {
    if(!checkGrid(i, sudokuGrid)) {
      return false;
    }
  }
  return true;
};

const checkSudoku = (sudokuGrid) => {
  
  //take in an array of arrays i.e. the grid
  // can sort the columns and rows but can't sort the grid when checking the grid
  if(checkGrids(sudokuGrid) && checkColumns(sudokuGrid)) && checkRows(sudokuGrid))) {
    return true;
  }
  return false;
};


console.log(checkSudoku(1,2,7,5,3,9,8,4,6,4,5,3,8,6,1,7,9,2,8,9,6,4,7,2,1,5,3,2,8,9,3,1,7,4,6,5,3,6,5,2,8,4,9,1,7,7,4,1,9,5,6,3,2,8,9,7,4,6,2,8,5,3,1,5,1,2,7,4,3,6,8,9,6,3,8,1,9,5,2,7,4
));


