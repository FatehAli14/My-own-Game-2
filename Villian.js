class Villian{

    preload(){
     enemy1_img=loadImage("images/Enemy1.jpg");
     enemy2_img=loadImage("images/Enemy2.jpg");

    }
    display(){
        var enemy;
        var Visibility=225;

        if (frameCount % 200 === 0) {
            enemy = createSprite(random(100, 1000), 0, 100, 100);
            enemy.scale=0.08;
            enemy.velocityY = 0.5;
            var rand = Math.round(random(1,2));
            switch(rand){
                case 1: enemy.addImage("enemy1",enemy1_img);
                break;
                case 2: enemy.addImage( "enemy1", enemy2_img);
                break;
                
            }
            enemy.lifeTime = 100
              
        }
        drawSprites();
    }
     
    
}