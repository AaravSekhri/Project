class Game{
    play(){
        ground = createSprite(100,100,100,100);
        ground.addImage(groundImage);
        ground.velocityY = 0.5;
    }
}