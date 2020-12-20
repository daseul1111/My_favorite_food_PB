let pizza;
let numBalls = 4;
let spring = 0.07;
let gravity = 0.001;
let friction = -1;
let balls = [];

function preload() {
  pizza = loadImage('pizza.jpg');
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(random(width),random(height),
  random(30, 70),i, balls);
  }
  noStroke();
  fill(255, 204);
}

function draw() {
  background(220);
  image(pizza,0,0);
  //noLoop();

  balls.forEach(ball => {
    ball.collide();
    ball.move();
    ball.display();
  });
}

class Ball {
  constructor(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.diameter = din;
    this.id = idin;
    this.others = oin;
  }

  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }
//가장 자리 튕기기
  move() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x +this.diameter > width) {
      this.x = width - this.diameter;
      this.vx *= friction;
    } else if (this.x  < 0) {
      this.x = 0 ;
      this.vx *= friction;
    }
    if (this.y + this.diameter > height) {
      this.y = height - this.diameter ;
      this.vy *= friction;
    } else if (this.y < 0) {
      this.y = 0 ;
      this.vy *= friction;
    }
  }
// 병 모양
  display() {
    stroke(220);
    strokeWeight(5);
    line(this.x-10,this.y-90,this.x+15,this.y-90); //병입구
    line(this.x-10,this.y-90,this.x-15,this.y-35); //병 목 왼쪽
    line(this.x-15,this.y-35,this.x-25,this.y-30);
    line(this.x-25,this.y-30,this.x-25,this.y+50);
    bezier(this.x-25,this.y+50,this.x-30,this.y+60,
      this.x+30,this.y+60,this.x+30,this.y+50); //병 바닥
    line(this.x+30,this.y+50,this.x+30,this.y-30);
    line(this.x+30,this.y-30,this.x+20,this.y-35);
    line(this.x+20,this.y-35,this.x+15,this.y-90);
  }
}
