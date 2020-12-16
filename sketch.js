//PImage bg;
let x =250;
let y =250;
let pizza;

function preload() {
  pizza = loadImage('pizza.jpg');
}
//background setting
function setup() {
  createCanvas(400, 400);
}

function draw () {
  //background(bg);
  background(220);
  image(pizza,0,0);
  noLoop();

  //draw beer
  stroke(0);
  strokeWeight(5);
  line(x-15,y-70,x+15,y-70);
  line(x-15,y-70,x-20,y-35);
  line(x-20,y-35,x-30,y-30);
  line(x-30,y-30,x-30,y+50);
  bezier(x-30,y+50,x-30,y+60,x+30,y+60,x+30,y+50);
  line(x+30,y+50,x+30,y-30);
  line(x+30,y-30,x+20,y-35);
  line(x+20,y-35,x+15,y-70);
}
