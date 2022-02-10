function setup () {
  createCanvas (windowWidth, windowHeight)
}

var gDebugMode = false;

function draw() {
  background(140);
  fill(0, 50, 0);
  stroke(0);
  strokeWeight(3);

  // Shirt
  drawShirt();

  // Neck
  drawNeck();

  // Hair
  drawHair();

  // Head
  drawHead();

  // Facial Features
  drawFace();

  if( gDebugMode ) {
    displayMouseCoordinates();
  }
}

function drawShirt() {
  beginShape();
  vertex(450, 670);
  vertex(670, 450);
  vertex(880, 670);
  endShape(CLOSE);
}

function drawNeck() {
  fill(255, 219, 172);
  beginShape();
  vertex(630, 365);
  vertex(710, 365);
  vertex(710, 505);
  vertex(630, 505);
  endShape(CLOSE);
}

function drawHead() {
  // Face Color
  fill(255, 219, 172);

  // Face
  beginShape();
  vertex(560, 350);
  vertex(605, 413);
  vertex(728, 412);
  vertex(777, 350);
  vertex(780, 130);
  vertex(560, 200);
  endShape(CLOSE);
}

function drawFace() {
  // Eyes
  fill(0, 0, 205);
  circle(610, 235, 30);
  circle(720, 235, 30);
 
  // Nose
  line(665, 276, 646, 309);
  line(646, 309, 665, 309);

  // Left Eyebrow
  line(590, 206, 630, 206);
  
  // Right Eyebrow
  line(700, 206, 744, 206);
  
  // Left Ear
  fill(255, 219, 172);
  arc(560, 260, 50, 50, HALF_PI, PI + HALF_PI);

  // Right Ear
  fill(255, 219, 172);
  arc(780, 260, 50, 50, HALF_PI + PI, HALF_PI);

  // MOUTH
  arc(665, 345, 98, 40, 0, PI, HALF_PI + PI)
}

function drawHair() {
  fill(165, 100, 10);
  beginShape();
  vertex(781, 130);
  vertex(776, 76);
  vertex(725, 44);
  vertex(674, 41);
  vertex(604, 52);
  vertex(557, 100);
  vertex(558, 200);
  endShape(CLOSE);
  hairDetails();
}

function hairDetails() {
  push();
  strokeWeight(5);
  stroke(0,0,0, 100);
  strokeWeight(4);
  pop();
}

function displayMouseCoordinates() {
  fill(0);
  textSize(24);
  strokeWeight(1);
  textAlign(LEFT);
  text("X: " + mouseX + " Y: " + mouseY, 20, height - 20);
}

function keyTyped() {
  if (key == ' ') {
    gDebugMode = !gDebugMode;
  }
}
