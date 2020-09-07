const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3;
var ball;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	





	engine = Engine.create();
	world = engine.world;



	dustbin1 = new Dustbin(650,660,200,20);
	dustbin2 = new Dustbin(550,620,20,100);
	dustbin3 = new Dustbin(750,620,20,100);

	ball = new Paper(50,350,40);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  ball.display();

  drawSprites();

}

function keyPressed() { 
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body, ball.body.position,{x:0, y:-0.2})	 
 }
 if (keyCode === DOWN_ARROW) {
	Matter.Body.applyForce(ball.body, ball.body.position,{x:0, y:0.2})	 
 }
 if (keyCode === LEFT_ARROW) {
	Matter.Body.applyForce(ball.body, ball.body.position,{x:-0.2,y:-0})	 
 }
 if (keyCode === RIGHT_ARROW) {
	Matter.Body.applyForce(ball.body, ball.body.position,{x:0.2,y:-0})	 
 }
}



