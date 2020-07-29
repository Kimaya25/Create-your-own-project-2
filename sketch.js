
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player_main;
var enemy1,enemy2,enemy3;
var back;

function preload(){
	backgroundImage = loadImage("images/space.jpg");
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	back = createSprite(400,400,800,800);
	back.velocityX = -2;

	player_main = new player(200,200,200,200);
	enemy1 = new enemy(150,350,50,50);
	enemy2 = new enemy(250,350,50,50);
	enemy3 = new enemy(400,350,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  if(back.x < 0  ){
	  back.x = back.width/2;
	 back.addImage(backgroundImage);
  }

  player_main.display();
  enemy1.display();
  enemy2.display();
  enemy3.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	   player_main.velocityX = 0;
	   player_main.velocityY = -5; 
	}

	if(keyCode === DOWN_ARROW){
		player_main.velocityX = 0;
		player_main.velocityY = 5;
	}

	if(keyCode === LEFT_ARROW){
		player_main.velocityX = -2;
		player_main.velocityY = 0;
	}

	if(keyCode === RIGHT_ARROW){
		player_main.velocityX = 2;
		player_main.velocityY = 0;
	}

	}

	




