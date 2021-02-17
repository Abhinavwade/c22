const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200, 380, 400, 40, options);
  World.add(world, ground);

  console.log(ground.position.x);
  console.log(ground.position.y);

  ball = Matter.Bodies.circle(200, 100, 20, {restitution: 1});
  World.add(world, ball);
}

function draw() {
  background("black");
 
  Engine.update(engine);
  
  ellipseMode(RADIUS);

  fill("blue");
  ellipse(ball.position.x, ball.position.y,20);

  rectMode(CENTER);

  fill("red")
  rect(ground.position.x, ground.position.y, 400, 40);

}