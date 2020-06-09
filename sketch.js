var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=("yellow");

    
	//Create a Ground
	ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 boxPosition=width/2+300
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=("white");

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=("white");

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=("white");

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);
	 paperObject=new Paper();
	Engine.run(engine);
	//ground=new Ground(width/2, 650, width, 10 );
	//side1=new Box(900,630,200,20);
	//side2=new Box(790,580,20,100);
	//side3=new Box(1010,580,20,100);
	
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  //ground.display();
  paperObject.display();
  //side1.display();
  //side2.display();
  //side3.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:200,y:-200});
		
	}
}


