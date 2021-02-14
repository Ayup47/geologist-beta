
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,stone,ground;

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer = new Hammer(300,300);
	ground = new Ground(600,600,1200,10);
	stone = new Stone(500,500,100,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  hammer.display();
  ground.display();
  stone.display();
  drawSprites();
 
}



