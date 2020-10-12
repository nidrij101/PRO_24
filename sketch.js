
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;

var dustbin1, dustbin2, dustbin3;

var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

    paper1 = new Paper(200,450,40);

	dustbin1 = new Dustbin(260,620,20,100);
	dustbin2 = new Dustbin(480,620,20,100);
	dustbin3 = new Dustbin(370,660,200,20);

	ground1 = new Ground(800,680,1600,20);
}


function draw() {
	background(0);
    Engine.update(engine);
	paper1.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground1.display();
}

function keyPressed(){
	if(keyCode === UP_AROWW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}