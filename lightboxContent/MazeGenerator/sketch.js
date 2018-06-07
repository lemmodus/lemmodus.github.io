let cols, rows;
const w = 10;
const width = 400;
const height = 400;
let grid = [];
var stack = [];

let currentCell;

function setup() {
  let canvas = createCanvas(width, height);
  canv.parent('sketch-holder');
  cols = floor(width / w);
  rows = floor(height / w);

  for (let iRow = 0; iRow < rows; iRow++) {
    for (let iCol = 0; iCol < cols; iCol++) {
      let cell = new Cell(iCol, iRow);
      grid.push(cell);
    }
  }

  currentCell = grid[0];

}

function draw() {
  background('#333333');
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }
  currentCell.visited = true;
  currentCell.highlight();
  let nextCell = currentCell.checkNeighbors();
  if (nextCell) {
    nextCell.visited = true;
    stack.push(currentCell);
    removeWalls(currentCell, nextCell);
    currentCell = nextCell;
  } else if (stack.length > 0) {
    currentCell = stack.pop();
  }
}
