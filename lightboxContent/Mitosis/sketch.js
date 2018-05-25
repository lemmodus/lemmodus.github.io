var cells = [];

function setup() {

  let canv = createCanvas(600, 600);
  canv.parent('sketch-holder');
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());

}

function draw() {

  background(51);

  for (var i = 0; i < cells.length; i++) {

    cells[i].move();
    cells[i].show();

  }

}

function mousePressed() {

  for (var i = cells.length - 1; i >= 0; i--) {

    if (cells[i].clicked(mouseX, mouseY)) {

      //alert("BÄM! MITOSIS!");
      var cellA = cells[i].mitosis();
      var cellB = cells[i].mitosis();
      cells.push(cellA);
      cells.push(cellB);
      cells.splice(i, 1);

    }

  }

}
