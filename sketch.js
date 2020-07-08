var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ball = new paper(100,230,15)
	ground = new Ground(400,250,800,10)
	side = new DustBin(625,195,20,70)
	bottom = new DustBin(697,235,125,20)
	otherside = new DustBin(769,195,20,70)                                                             

}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  side.display();
  bottom.display();
  otherside.display();
  drawSprites();
  keyPressed();
}


function keyPressed() {
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.Body,ball.Body.position,{x:1,y:-2});
	}
}



