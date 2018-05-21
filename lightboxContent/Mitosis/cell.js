function Cell(pos, r, c) {

  if (pos) {

    this.pos = pos.copy();

  } else {

    this.pos = createVector(random(width), random(height));

  }

  this.r = r || 100;
  this.c = c || color(10, random(100, 255), random(100, 255), 100);

  this.clicked = function(x, y) {

    var d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r) {

      return true;

    } else {

      return false;

    }

  }

  this.mitosis = function() {

    this.pos.x += random(-this.r*0.8, this.r*0.8);
    var cellM = new Cell(this.pos, this.r*0.8, this.c);
    return cellM;

  }

  this.move = function() {

    var velocity = p5.Vector.random2D();
    this.pos.add(velocity);

  }

  this.show = function() {

    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r)

  }

}
