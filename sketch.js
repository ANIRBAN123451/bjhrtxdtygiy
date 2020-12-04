
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var wall1;

function preload(){
	bgImage=loadImage("bg.jpg")
	
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    wall1=new ground(600,395,1200,10);
	cr1=new character(200,340,100,200);
	ob1=new object(160,293,27,27);
	tree1=new obstacle(1000,370,300,400)
	food0=new fruit(1090,130,50,50)
	food1=new fruit(990,80,50,50)
	food2=new fruit(920,140,50,50)
	

	rope1=new rope(ob1.body,{x:160,y:293})
	
}

function draw() {
  background(bgImage);
  Engine.update(engine);

  detectCollision(ob1,food0);
  detectCollision(ob1,food1);
  detectCollision(ob1,food2);
  

 fill("green")
  wall1.show();

  cr1.display();
  ob1.display();
  tree1.display();
  food0.display();
  food1.display();
  food2.display();
  rope1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ob1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.move();
}
