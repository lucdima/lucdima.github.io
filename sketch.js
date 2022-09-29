
var img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220)
  // img = loadImage('images/sun.jpg');
}

function draw() {
    fill(random(255))
    circle(random(windowWidth),random(windowHeight),random(200))
    // background(220);
    // image(img, mouseX, mouseY);
}

function mousePressed() {
    userStartAudio();
    for (var i=0; i<100; i++) {
        fill(random(255),random(255),random(255))
        circle(random(800),random(800),random(200))
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  print("la ventana cambió de tamaño!");
}
