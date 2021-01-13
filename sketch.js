
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ball1,ball2,ball3,ball4,ball5,ground;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(500,50,1000,20)
ball1=new Ball(300,350,50)
ball2=new Ball(400,350,50)
ball3=new Ball(500,350,50)
ball4=new Ball(600,350,50)
ball5=new Ball(700,350,50)
chain1=new Chain(ball1.body,ground.body,{x:-200,y:0})
chain2=new Chain(ball2.body,ground.body,{x:-100,y:0})
chain3=new Chain(ball3.body,ground.body,{x:0,y:0})
chain4=new Chain(ball4.body,ground.body,{x:100,y:0})
chain5=new Chain(ball5.body,ground.body,{x:200,y:0})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  drawSprites();
 
}
function mouseDragged(){

Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}


