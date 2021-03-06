var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground;
var survivalTime=0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
    createCanvas(550, 250);
  
  monkey=createSprite(50,200,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(300,240,2000,20);
  ground.x = ground.width/2;
  ground.velocityX=-4;
  console.log(ground.x);
  
  
  
  FoodGroup = createGroup();

  
}


function draw() {
  background("skyBlue");
  
  // score texts
  stroke("white");
  textSize(15);
  fill("white");
  text("Score: "+ score, 10,20);
  
  // survival time texts
  stroke("white");
  textSize(15);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 425,20);
  
  

//calling the groups
  bananas();
  obstacles();
    
  if(keyDown("space")&& monkey.y >= 150) {
        monkey.velocityY = -12;
    }
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
//add gravity
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  
  
  
  drawSprites();
}
function bananas() {
  if (frameCount % 80 === 0){
  banana=createSprite(600,120,10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4;
  banana.lifetime = 200;

    FoodGroup.add(banana);
  }
}
function obstacles() {
  if (frameCount % 300 === 0){
  obstacle=createSprite(600,212,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-4;
  obstacle.lifetime = 200;
  }
}




