function index(col, row) {
  if (col < 0 || row < 0 || col > cols - 1 || row > rows - 1) {
    return -1;
  }
  return col + row * cols;
};

class Cell {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.walls = [true, true, true, true];
    this.visited = false;
  }

  checkNeighbors() {
    let neighbors = [];

    let top = grid[index(this.col, this.row - 1)];
    let right = grid[index(this.col + 1, this.row)];
    let bottom = grid[index(this.col, this.row + 1)];
    let left = grid[index(this.col - 1, this.row)];

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      let ranNeigh = floor(random(0, neighbors.length));
      return neighbors[ranNeigh];
    } else {
      return undefined;
    }
  }

  show() {
    let x = this.col * w;
    let y = this.row * w;

    stroke(255);

    if (this.walls[0]) {
      line(x, y, x + w, y);
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }
    if (this.walls[3]) {
      line(x, y + w, x, y);
    }

    if (this.visited) {
      noStroke();
      fill(x, (sin(frameCount / 30) * 100) + 50, y, 160);
      rect(x, y, w, w);
    }
  }

  highlight() {
    let x = this.col * w;
    let y = this.row * w;
    noStroke();
    fill(x, (sin(frameCount / 30) * 100) + 50, y+50);
    rect(x, y, w, w);

  }

}

function removeWalls(origin, destination) {
  let x = origin.col - destination.col;
  let y = origin.row - destination.row;
  if (y == 1) {
    origin.walls[0] = false;
    destination.walls[2] = false;
  } else if (x == -1) {
    origin.walls[1] = false;
    destination.walls[3] = false;
  } else if (y == -1) {
    origin.walls[2] = false;
    destination.walls[0] = false;
  } else if (x == 1) {
    origin.walls[3] = false;
    destination.walls[1] = false;
  }
};
