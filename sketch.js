
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new roof(400, 200, 400, 70);
	bob1 = new bob(400, 600, 50);
	bob2 = new bob(450, 600 , 50);
	bob3 = new bob(500, 600, 50)
	bob4 = new bob(450, 600, 50);
	bob5 = new bob(300, 600, 50);
	chain1 = new chain(bob1.object,roof1.object,-100,0);
	chain2 = new chain(bob2.object,roof1.object,-50,0);
	chain3 = new chain(bob3.object,roof1.object,0,0);
	chain4 = new chain(bob4.object,roof1.object,50,0);
	chain5 = new chain(bob5.object,roof1.object,100,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}



