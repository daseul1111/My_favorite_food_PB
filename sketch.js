let beers = []
let pizza;

function preload() {
  pizza = loadImage('pizza.jpg');
}
//background setting
function setup() {
  createCanvas(400, 400);
for (let i = 0; i<4; i++) {
  let x = random(width);
  let y = random(height);
  bubbles[i] = new Beer(x,y);
  }
}

function draw () {
  background(220);
  image(pizza,0,0);
  noLoop();

  for (let i=0; i< beers.length; i++) {
    beers[i].move();
    beers[i].show();
  }
}

class Beer {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

move(){
  this.x = this.x + random(-5,5);
  this.y = this.y + random(-5,5);
}

show() {
  stroke(0);
  strokeWeight(5);
  line(this.x-10,this.y-90,this.x+15,this.y-90); //병입구
  line(this.x-10,this.y-90,this.x-15,this.y-35); //병 목 왼쪽
  line(this.x-15,this.y-35,this.x-25,this.y-30);
  line(this.x-25,this.y-30,this.x-25,this.y+50);
  bezier(this.x-25,this.y+50,this.x-30,this.y+60,
    this.x+30,this.y+60,this.x+30,this.y+50); //병 바닥
  line(this.x+30,this.y+50,this.x+30,this.y-30);
  line(this.x+30,this.y-30,this.x+20,this.y-35);
  line(this.x+20,this.y-35,this.x+15,this.y-90); //병 목 오른쪽
  }
}
