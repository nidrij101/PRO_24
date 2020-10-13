
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper1;

var dustbin1, dustbin2, dustbin3;

var ground1;



function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;
	dustbin1 = new Dustbin(1090,620,20,100);
	dustbin2 = new Dustbin(1310,620,20,100);
	dustbin3 = new Dustbin(1200,660,200,20);
	paper1 = new Paper(200,450,20);
	ground1 = new Ground(800,680,1600,20);
	
	  
}


function draw() {
	
	background(0);
   Engine.update(engine);
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	paper1.display();
	ground1.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:20,y:-20});
  
	}
}