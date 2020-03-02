
let fr = 5; //starting FPS
var y = 100;
function setup() {
  createCanvas(400, 400);
  background(32);
  frameRate(fr);

}

function draw() {
  background(50);

 
  noStroke();
  fill(66,133,244);
  ellipse(125,y, 40);


  fill(219,68,55);
  ellipse(175,200, 40);
  fill(244,160,0);
  ellipse(225,200, 40);
  fill(15,157,88);
  ellipse(275,200, 40);

  
}



