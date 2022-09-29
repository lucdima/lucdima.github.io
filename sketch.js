// Estados del programa
// Intro -> 0
// Arte 1 -> 1
// Arte 2 -> 2
// Gracias -> 3

var estado = 0;


// arrays
var poema = [];
poema[0] = 'Oh, an incurable humanist you are';
poema[1] = 'You are, you are, are';
poema[2] = 'Let’s go to the movies';
poema[3] = 'I will hum you a song about nothing at all';
poema[4] = 'Nothing at all, nothing at all';

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220)
  textSize(32);
}

// Esto se ejecuta todo el tiempo a 30 o 60 fps
function draw() {
    // dependiendo del valor de estado mostramos lo que corresponda
    if (estado == 0) {
        // codigo para la intro
        background(220);
        textSize(32);
        fill(0);
        text('Hola! este es mi arte.', 100,100);
        text('Click en el mouse para comenzar', 100,200);
        text(estado, 100,500)
        text(floor(millis()/1000), 100,600);
    } else if (estado == 1) {
        // codigo para arte 1
        frameRate(60);
        fill(random(255),random(255),random(255))
        circle(random(800),random(800),random(200))
    } else if (estado == 2) {
        // codigo para arte 2
        frameRate(2);
        background(random(255));
        for(var i = 0; i<5;i+=1) {
          pos = floor(random(5))
          fill(random(255), random(255), random(255))
          text(poema[pos], 50,100+i*50);
        }
    } else if (estado == 3) {
        // codigo para gracias
        frameRate(60);
        fill(255,0,0);
        textSize(40);
        text('Gracias totales.', 100,100);
        textSize(32);
        text('Click en el mouse para recomenzar', 100,200);
    }


    // if (floor(millis()/1000) > 3 && floor(millis()/1000) < 6) {
    //     background(220);
    //     estado = 1;
    // } else if (floor(millis()/1000) > 6 && floor(millis()/1000) < 9) {
    //     background(220);
    //     estado = 2;
    // } else if (floor(millis()/1000) > 9 && floor(millis()/1000) < 12) {
    //     background(220);
    //     estado = 3;
    // }
    // background(222);


    //
    // fill(random(255))
    // circle(random(windowWidth),random(windowHeight),random(200))


}

function mousePressed() {
    // Cambiar el estado!
    // cambiar el valor de la variable
    estado = estado + 1;
    background(220);
    // poner un limitador!!!
    if (estado > 3) {
        estado = 0;
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  print("la ventana cambió de tamaño!");
}
