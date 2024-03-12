let counter = 0;

let countInterval = setInterval(makeRandomSquare, 1);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(1);
}

function mousePressed(){
  setInterval(makeRandomSquare, 10);
}

function makeRandomSquare(){
  noStroke();
  fill(random(0, 255), random(0, 255), random(0, 255));
  rect(random(0, width), random(0, height), random(1, 3), random(1, 8000));
  counter++;
  if (counter > 1000){
    clearInterval(countInterval); 
    counter = 0;
  }
}

function mousePressed(){
  countInterval = setInterval(makeRandomSquare, 1);
}

// function makeBoringSquare(){
//   stroke(255);
//   noFill();
//   rect(random(0, width), random(0, height), 10, 10);
// }

function draw() {
}
