let strawberry = [214, 114, 122];
let blueberry = [79, 129, 179];
let lemon = [232, 225, 132];

function setup() {
  createCanvas(400, 400);
}
 
function draw() {
  background(235, 229, 218);
  
  stroke(255);
  fill(255);
  arc(200, 250, 150, 150, (15*PI)/8, (3*PI)/2);
  triangle(210, 235, 210, 165, 275, 208);
  arc(210, 235, 150, 150, (3*PI/2), (15*PI/8));
  
  //strawberry
  stroke(strawberry);
  fill(strawberry);
  circle(100, 100, 50);
  
  //blueberry
  stroke(blueberry);
  fill(blueberry);
  circle(200, 100, 50);
  
  //lemon
  stroke(lemon);
  fill(lemon);
  circle(300, 100, 50);
  
  textSize(25);
  stroke(112, 106, 93);
  fill(0,0,0,0);
  text('Pick Your Topping!', 100, 45);

  if (mouseY > 75 && mouseY < 125 && ((mouseX > 75 && mouseX<125)||(mouseX>175 && mouseX <225)||(mouseX >275 && mouseX <325))) {
    if(mouseX> 75 && mouseX < 125) {
      stroke(strawberry);
      fill(strawberry);
    } else if(mouseX > 175 && mouseX < 225) {
      stroke(blueberry);
      fill(blueberry);
    } else if(mouseX >275 && mouseX <325) {
      stroke(lemon);
      fill(lemon);
    }
    circle(180, 210, 20);
    circle(157, 245, 20);
    circle(175, 287, 20);
    circle(220, 288, 20);
    circle(245, 250, 20);
    circle(237, 195, 20);
  }
}