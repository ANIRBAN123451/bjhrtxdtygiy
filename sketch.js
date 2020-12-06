
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;



function preload(){
	bgImage=loadImage("bg.jpg")
	
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
        ground1=new ground(600,395,1200,10);
	boy=new character(200,340,100,200);
	stone=new weapon(160,293,27,27);
	tree1=new tree(1000,370,300,400)
	mango1=new fruit(1090,130,50,50)
	mango2=new fruit(990,80,50,50)
	mango3=new fruit(920,140,50,50)
	

	rope1=new rope(boy.body,{x:160,y:293})
	
}

function draw() {
  background(bgImage);
  Engine.update(engine);

 /* detectCollision(ob1,food0);
  detectCollision(ob1,food1);
  detectCollision(ob1,food2);
  */

 fill("green")
  ground1.show();

  boy.display();
  stone.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  rope1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.move();
}
