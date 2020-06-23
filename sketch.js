var trex, trex_img
var ground , ground_img
var ground2
var cloud_img
var ob_img , ob2_img , ob3_img, ob4_img,ob5_img , ob6_img
var ObstacleGroup , CloudGroup
var score
var PLAY = 1
var END = 0
var gameState = PLAY



function preload(){
  trex_img=loadAnimation("trex1.png","trex4.png","trex3.png")
  
  ground_img=loadImage("ground2.png")
  
  cloud_img=loadImage("cloud.png")
  
  ob_img=loadImage("obstacle1.png")
  
  ob2_img=loadImage("obstacle2.png")
  
  ob3_img = loadImage("obstacle3.png")
  
  ob4_img= loadImage("obstacle4.png")
  
  ob5_img = loadImage("obstacle5.png")
  
  ob6_img = loadImage("obstacle6.png")
                    
                    
  
  }

function setup() {
  createCanvas(800, 200);
  trex=createSprite(80,170,20,30)
  trex.scale = 0.5
  trex.addAnimation("trex",trex_img)
 
  
  ground=createSprite(400,180,800,40)
  ground.addImage("ground",ground_img)
  ground.velocityX = -6
  ground.x = ground.width/2
  
  ground2=createSprite(400,195,800,10)
  ground2.visible = false
  
  ObstacleGroup = new Group()
  CloudGroup = new Group()
  score = 0
  
  
}

function draw() {
  background("white");
  
  trex.collide(ground2)
  
  if(gameState===PLAY){
    
  
  if(ground.x<0){
    ground.x = ground.width/2
  }
  
  if(keyDown("space")&& trex.y>100){
    trex.velocityY= -15
  }
  
  trex.velocityY = trex.velocityY+5
  spawnClouds()
  
 spawnObstacles() 
    
    score = score +Math.round(frameCount/150)
    
  if(trex.isTouching(ObstacleGroup)){
     gameState = END
  }
    
    
  }
  
  
  
  
  
 
  
  drawSprites()
    
    text("score:"+score,10,20)
  
   
  
}

  
function spawnClouds(){
  if(frameCount%30===0){
 var cloud= createSprite(680,60,20,20)
  cloud.addImage("clouds",cloud_img)
  cloud.velocityX= -8
    CloudGroup.add(cloud)
  }
}

function spawnObstacles(){
  if(frameCount%30===0){
var o1 = createSprite(580,165,20,20)
o1.velocityX = 0
    var rand = Math.round(random(1,6))
    switch(rand){
      case 1: o1.addImage("ob", ob_img)
        break;
        case 2: o1.addImage("ob2", ob2_img)
        break;
        case 3: o1.addImage("ob3", ob3_img)
        break;
        case 4: o1.addImage("ob4", ob4_img)
        break;
        case 5: o1.addImage("ob5", ob5_img)
        break;
        case 6: o1.addImage("ob6", ob6_img)
        break;

    }
    o1.scale = 0.5
    
    ObstacleGroup.add(o1)
                           
  }
}
  
  
  
  
