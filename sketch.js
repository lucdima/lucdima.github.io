// noprotect;
var capture;
var img;
function setup() {
  createCanvas(640, 480 );
  capture = createCapture(VIDEO);
  capture.hide();
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  capture.loadPixels();
  // print(capture.pixels);
  // print(capture.pixels[0]);


  // image(capture,0,0);
  // loadPixels();
  // var c = capture.get(mouseX,mouseY);
  // fill(c);
  // circle(mouseX,mouseY, 50);
  

  // var stepSize = 10;
  // for (var y=0; y<capture.height; y+=stepSize) {
  //   for (var x=0; x<capture.width; x+=stepSize) {
  //     var i = y * capture.width + x
  //     var cred = capture.pixels[i*4];
  //     var cgreen = capture.pixels[i*4 + 1];
  //     var cblue = capture.pixels[i*4 + 2];
  //     // print(c);
      

  //     // var c = capture.get(x,y);

  //     fill(cred, cgreen, cblue);
  //     // rect(x,y,stepSize,stepSize);
  //     circle(x,y,stepSize);
      
  //   }
  // }
  
  

  // var stepSize = 4;
  var stepSize = round(map(mouseY, 0, height, 4,24));
  for (var y=0; y<capture.height; y+=stepSize) {
    for (var x=0; x<capture.width; x+=stepSize) {
      var i = y *  capture.width + x
      // var averageColor = round((capture.pixels[i*4] + capture.pixels[i*4 + 1] + capture.pixels[i*4 + 2]) / 3)
      var darkness = (255 - capture.pixels[i*4]) / 255;
      // var darkness = (255 - averageColor) / 255;
      var radius = stepSize * darkness;
      ellipse(x,y,radius,radius);
    }
  }
}