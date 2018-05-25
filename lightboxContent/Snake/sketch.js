window.onload = () => {
  this.focus();
};


var snake;
var gridscale = 20;

var food;


function setup() {
  let canv = createCanvas(600, 600);
  canv.parent('sketch-holder');
  snake = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var gridcolumns = floor(width / gridscale);
  var gridrows = floor(height / gridscale);

  food = createVector(floor(random(gridcolumns)), floor(random(gridrows)));
  food.mult(gridscale);
}

function draw() {
  background('#333333');

  if (snake.eat(food)) {
    pickLocation();
  }

  snake.death();
  snake.update();
  snake.show();

  fill('#fae569');
  rect(food.x, food.y, gridscale, gridscale);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.direction(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.direction(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.direction(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.direction(1, 0);
  }
}
