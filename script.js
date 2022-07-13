var size = "";
var color = "";
var trail = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);
  size = prompt("How large would you like to draw?")
  color = prompt("What color would you like to draw?")
}

function draw() {
  stroke("black");
  fill(color);
  circle(mouseX,mouseY,size)
}