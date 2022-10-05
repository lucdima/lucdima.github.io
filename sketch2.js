let capture;
var parts=[];

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
}
function draw() {
  background(0);
  
    parts[0] = capture.get(0, 0, 100, 100);
    parts[1] = capture.get(100, 0, 200, 100);
    parts[2] = capture.get(200, 0, 300, 100);
    parts[3] = capture.get(300, 0, 400, 100);

    image(parts[2], 0, 0);
    image(parts[1], 100, 0);
    image(parts[0], 200, 0);
    image(parts[3], 300, 0);
  
}