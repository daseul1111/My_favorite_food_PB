//PImage bg;
let x =250;
let y =250;

//background setting
function setup() {
  //bg = loadImage('pizza.jpg');
  createCanvas(500, 500);
}

function draw () {
  //background(bg);
  background(220);

  //draw beer
  stroke(0);
  strokeWeight(5);
  line(x-5,y-60,x+5,y-60);
  line(x-5,y-60,x-10,y-25);
  line(x-10,y-25,x-20,y-20);
  line(x-20,y-20,x-20,y+40);
  bezier(x-20,y+40,0,x-50,y+50,0,x-20,y+50,0,x+20,y+40,0);
  line(x+20,y+40,x+20,y-20);
  line(x+20,y-20,x+10,y-25);
  line(x+10,y-25,x+5,y-60);
}
