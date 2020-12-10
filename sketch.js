
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
    ground1=new ground(600,395,1200,10);
	boy=new character(200,340,100,200);
	stone=new weapon(160,293,40);
	tree1=new tree(1000,220,250,350);
	mango1=new fruit(1090,150,50);
	mango2=new fruit(990,80,50);
	mango3=new fruit(920,140,50);

	rope1=new rope(stone.body,{x:160,y:293})
}

function draw() {
  background(bgImage);
  Engine.update(engine);

 fill("green")
  ground1.show();

  boy.display();
  stone.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  rope1.display();

  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    rope1.move();
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(stone.Body,{x:235,y:420})
        rope1.attach(stone.Body);
    }
}

function detectCollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position;
    stoneBodyPosition=lstone.body.position;

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=lmango.radius+lstone.radius)
    {
        Matter.Body.setStatic(lmango.body,false)
    }
  }
