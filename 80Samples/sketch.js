var sounds = [];

function preload() {
  soundFormats('mp3', 'ogg');
  sounds[0] = loadSound('sounds/base.mp3');
  sounds[1] = loadSound('sounds/base2.mp3');
  sounds[2] = loadSound('sounds/five.mp3');
  sounds[3] = loadSound('sounds/four.mp3');
  sounds[4] = loadSound('sounds/three.mp3');
  sounds[5] = loadSound('sounds/two.mp3');
  sounds[6] = loadSound('sounds/one.mp3');
  sounds[7] = loadSound('sounds/frequency.mp3');
  sounds[8] = loadSound('sounds/protect-the-inocents.mp3');
  sounds[9] = loadSound('sounds/roof.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220)
  textSize(32);
}

function draw() {
  background(128);


  if (sounds[0].isPlaying()) {
      background(millis() % 255);
  }
  if (sounds[1].isPlaying()) {
    background(random(255), random(255),random(255));
  }

  if (sounds[2].isPlaying()) {
    textSize(256);
    fill(random(255), random(255), random(255));
    text('5', random(windowWidth),random(windowHeight));
  }

  if (sounds[3].isPlaying()) {
    textSize(256);
    fill(random(255), random(255), random(255));
    text('4', random(windowWidth),random(windowHeight));
  }

  if (sounds[4].isPlaying()) {
    textSize(256);
    fill(random(255), random(255), random(255));
    text('3', random(windowWidth),random(windowHeight));
  }

  if (sounds[5].isPlaying()) {
    textSize(256);
    fill(random(255), random(255), random(255));
    text('2', random(windowWidth),random(windowHeight));
  }

  if (sounds[6].isPlaying()) {
    textSize(256);
    fill(random(255), random(255), random(255));
    text('1', random(windowWidth),random(windowHeight));
  }

  if (sounds[7].isPlaying()) {
    textSize(300);
    text('🚀', random(windowWidth),random(windowHeight));
  }

  if (sounds[8].isPlaying()) {
    textSize(300);
    text('❤️', random(windowWidth),random(windowHeight));
  }

  if (sounds[9].isPlaying()) {
    textSize(300);
    background(0);
    text('🔥', random(windowWidth),random(windowHeight));
  }
}

function keyTyped() {
  if (key === 'z') {
      sounds[0].play();  
  } else if (key === 'x') {
    sounds[1].play();
  } else if (key === '5') {
    sounds[2].play();
  } else if (key === '4') {
    sounds[3].play();
  } else if (key === '3') {
    sounds[4].play();
  } else if (key === '2') {
    sounds[5].play();
  } else if (key === '1') {
    sounds[6].play();
  } else if (key === 'a') {
    sounds[7].play();
  } else if (key === 's') {
    sounds[8].play();
  } else if (key === 'd') {
    sounds[9].play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
