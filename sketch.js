//PImage bg;
let x =250;
let y =250;
let pizza;

function preload() {
  pizza = loadImage('pizza.jpg');
}
//background setting
function setup() {
  createCanvas(500, 500);
}

function draw () {
  //background(bg);
  background(220);
  image(pizza,0,0);
  noLoop();

  //draw beer
  stroke(0);
  strokeWeight(5);
  line(x-5,y-60,x+5,y-60);
  line(x-5,y-60,x-10,y-25);
  line(x-10,y-25,x-20,y-20);
  line(x-20,y-20,x-20,y+40);
  bezier(x-20,y+40,x-20,y+50,x+20,y+50,x+20,y+40);
  line(x+20,y+40,x+20,y-20);
  line(x+20,y-20,x+10,y-25);
  line(x+10,y-25,x+5,y-60);
}
