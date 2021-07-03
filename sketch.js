const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bgImg,ground1,ground2,ground3,ground4,ground5;
var canvas;
var hero,hero_img;
var enemy1,enemy2,enemy3,enemy4;
var enemy1_img,enemy2_img,enemy3_img,enemy4_img;
var laserGroup,laser_img;
var arrowGroup;
var enemy1,enemy2;

function preload(){
  bgImg = loadImage("images/Space.jpg");
  hero_img = loadImage("images/Hero2.jpg")
  //enemy1_img = loadImage("images/Enemy1.jpg");
  //enemy2_img = loadImage("images/Enemy2.jpg");
  enemy1_img = loadImage("images/Enemy1.jpg");
  enemy2_img = loadImage("images/Enemy2.jpg");
  laser_img = loadImage("images/LaserBeams.png")
}

function setup() {
  canvas = createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

   
  
  hero =createSprite(460, 520,80,100);
  hero.addImage(hero_img);
  hero.scale=0.2;
  ground1 = new Ground(500,510,1000,10);
 
  laserGroup = new Group();
  arrowGroup  = new Group();

  enemy1 = new Villian();
}

function draw() {
  background(bgImg);
  Engine.update(engine);
    //console.log(mouseX,mouseY)
    if (keyDown("space")) {
      //arrowSound.play();
      heroPellets();    
    } 

   if (frameCount % 80 === 0) {
    laser = createSprite(random(100, 1000), 0, 100, 100);
    laser.scale=0.08;
    laser.velocityY = 6;
    var rand = Math.round(random(1,5));
    switch(rand){
        case 1: laser.addImage("laser1",laser_img);
        break;
        case 2: laser.addImage("laser1", laser_img);
        break;
        case 3: laser.addImage("laser1", laser_img);
        break;
        case 4: laser.addImage("laser1", laser_img);
        break;
        case 5: laser.addImage("laser1", laser_img);
        break;
    }
      laserGroup.add(laser);
      laser.lifeTime = 100
}
  
    if(laserGroup.isTouching(hero)){
      hero.destroy();
      laserGroup.destroy();
    }
 
   //for (var i = 0; i < laserGroup.length; i++) {
       //if (laserGroup.get(i).isTouching(ground1,hero)) {
       //    laserGroup.get(i).destroy();
          
           
      //}
       
 // }
 
  enemy1.display();
  
  //ground1.display();
  mouseMoved();
  drawSprites();
 
}  

function mouseMoved(x){
  hero.x = mouseX;

}

function heroPellets(){
    var arrow= createSprite(460, 520, 10, 100);
    //arrow.addImage(arrowImage);
    arrow.shapeColor="black";
    arrow.x = 460;
    arrow.x=hero.x;    
    arrow.velocityY = -4;
    arrow.lifetime = 200;
    arrow.scale = 0.3;
    arrowGroup.add(arrow);
    return arrow;
}


