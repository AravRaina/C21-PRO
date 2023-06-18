const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var waste1

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(400,690,800,20);
  right = new Ground(790,350,20,700);
  left = new Ground(10,350,20,700);
  top_wall = new Ground(400,10,800,20);
  waste1 = new Ground(600,630,20,100)
  waste2 = new Ground(500,630,20,100)

  ball_options={
    restitution:0.3,
	friction:0,
	density:1.2
  }

  ball = Bodies.circle(200, 100,20, ball_options);
  World.add(world,ball);
 


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  waste1.show();
  ellipse(ball.position.x, ball.position.y,20)
  Engine.update(engine);
}







function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,{x:0, y:0}, {x:0, y:-50})

	}else if (keyCode === LEFT_ARROW) {

		Matter.Body.applyForce(ball,{x:0, y:0}, {x:-50, y:0})

	}else if (keyCode === RIGHT_ARROW) {

		Matter.Body.applyForce(ball,{x:0, y:0}, {x:50, y:0})

	}
}

