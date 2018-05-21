window.onload = () => {
  this.focus();
};

var ship;
var invaders = [];
var projectiles = [];

function setup() {

  frameRate(12);

  let canv = createCanvas(600, 400);
  canv.parent('sketch-holder');
  ship = new Ship();

  for (var i = 0; i < 10; i++) {

    invaders[i] = new Invader(i * 50 + 50, 50);

  }
}

function draw() {

  background(51);
  ship.show();
  ship.move();


  var edgeReached = false;
  var groundReached = false;

  for (var i = 0; i < invaders.length; i++) {

    invaders[i].show();
    invaders[i].move();

    if (invaders[i].x > width - invaders[i].irad) {

      edgeReached = true;

    } else if (invaders[i].x < 0 + invaders[i].irad) {

      edgeReached = true;

    }

    if (invaders[i].y > height - invaders[i].irad - 40) {

      groundReached = true;

    }

  }

  if (edgeReached) {

    for (var i = 0; i < invaders.length; i++) {

      invaders[i].show();
      invaders[i].shift();

    }

  }

  if (groundReached) {

    console.log("Game Over");
    location.reload(true);

  }

  for (var i = 0; i < projectiles.length; i++) {

    projectiles[i].show();
    projectiles[i].move();

    for (var j = 0; j < invaders.length; j++) {

      if (projectiles[i].hits(invaders[j])) {

        invaders[j].explode();
        projectiles[i].evaporate();
        console.log("HIT");

      }

    }

  }



  for (var i = projectiles.length - 1; i >= 0; i--) {

    if (projectiles[i].toDelete) {

      projectiles.splice(i, 1);

    }

  }

  for (var i = invaders.length - 1; i >= 0; i--) {

    if (invaders[i].toDelete) {

      invaders.splice(i, 1);

    }

  }

}

function keyPressed() {

  if (key === " ") {

    var projectile = new Projectile(ship.x, height - 45);
    projectiles.push(projectile);

  }

  if (keyCode === RIGHT_ARROW) {

    ship.setDirection(1);

  } else if (keyCode === LEFT_ARROW) {

    ship.setDirection(-1);

  }
}

function keyReleased() {

  if (key != " ") {

    ship.setDirection(0);

  }

}
