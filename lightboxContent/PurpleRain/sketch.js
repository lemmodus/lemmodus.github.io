var drops = [];

function setup() {

  let canv = createCanvas(640, 360);
  canv.parent('sketch-holder');
  for (var i = 0; i < 500; i++) {

    drops[i] = new drop();

  }
}

function draw() {

  background('black');
  for (var i = 0; i < drops.length; i++) {

    drops[i].fall();
    drops[i].show();

  }
}
