//PImage bg;
var beer={x:250, y:250};
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
  line(beer.x-10,beer.y-90,beer.x+15,beer.y-90); //병입구
  line(beer.x-10,beer.y-90,beer.x-15,beer.y-35); //병 목 왼쪽
  line(beer.x-15,beer.y-35,beer.x-25,beer.y-30);
  line(beer.x-25,beer.y-30,beer.x-25,beer.y+50);
  bezier(beer.x-25,beer.y+50,beer.x-30,beer.y+60,
    beer.x+30,beer.y+60,beer.x+30,beer.y+50); //병 바닥
  line(beer.x+30,beer.y+50,beer.x+30,beer.y-30);
  line(beer.x+30,beer.y-30,beer.x+20,beer.y-35);
  line(beer.x+20,beer.y-35,beer.x+15,beer.y-90); //병 목 오른쪽

  beer.x = beer.x +1;
}
