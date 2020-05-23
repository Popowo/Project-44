function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 80 === 0) {
      var cloud = createSprite(1500,120,40,10);

      var r = Math.round(random(200,300));
      cloud.y = r;
        //cloud.addImage(cloudImage);
      cloud.scale = 1.5;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 500;
      
      //adjust the depth
      cloud.depth = trex.depth;
      trex.depth = trex.depth + 1;
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
}