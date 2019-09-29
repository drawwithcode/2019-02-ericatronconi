//lista dei colori possibili//
var colorlist = ['lightseagreen', 'aquamarine', 'rosybrown', 'salmon', 'seashell'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  //primi setting per le forme e la velocità di apparizione//
  noFill();
  frameRate(5);

}

function draw() {


  for (var i = 0; i < 20; i++); {
    //inidicazione del colore//
    var index = Math.round(random() * (colorlist.length - 1));
    console.log(index);
    strokeWeight(5);
    stroke(color(colorlist[index]));
    //definizione delle variabili per la creazione della forma
    var x = random() * width;
    var y1 = random() * height;
    var y2 = y1 + 30;
    //forma: linee zig zag//
    beginShape();
    vertex(x, y1);
    vertex(x + 15, y2);
    vertex(x + 30, y1);
    vertex(x + 45, y2);
    vertex(x + 60, y1);
    vertex(x + 75, y2);
    endShape();

  }
}
