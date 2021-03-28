const Constraint = Matter.Constraint
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

	roof = new Roof(400,100,300,10);

	ball = new Ball(280,450);
	ball1 = new Ball(340,450);
	ball2 = new Ball(400,450);
	ball3 = new Ball(460,450);
	ball4 = new Ball(520,450);

	rope = new Rope(ball.body,roof.body,-100);
	rope1 = new Rope(ball1.body,roof.body,-50);
	rope2 = new Rope(ball2.body,roof.body,0);
	rope3 = new Rope(ball3.body,roof.body,50);
	rope4 = new Rope(ball4.body,roof.body,100);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();

  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  
  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x : -80,y : 50});
	}

	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x : -80,y : 50});
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x : -80,y : 50});
	}
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}