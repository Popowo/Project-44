var PLAY = 1;
var END = 0;
var score = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var cloudStart, cloud, cloudsGroup, cloudImage;


var gameOver, restart;

function preload() {

}


function setup() {
  createCanvas(1500,700);

  cloudsGroup = new Group();
  
  cloudStart = createSprite(200,125,50,25);
  trex = createSprite(200,115,20,20);


}


function draw() {
  background(255);
  textSize(20);
  text("Score = "+score, 1300,100);
  
  spawnClouds();
  var c = 0;
  if(cloudsGroup.isTouching(trex)){
    c = c + Math.round(getFrameRate()/60);
    if(c>=0&&c<=5){
      score+=c;
    }
        trex.velocityX = -3
  }



  if(keyDown("space")) {
    //jumpSound.play();
    trex.velocityY = -7.5;
    trex.velocityX = 4.5;
  }

  trex.velocityY = trex.velocityY + 0.8
  trex.collide(cloudStart);
  trex.collide(cloudsGroup);


  

  drawSprites();
}