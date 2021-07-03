class Laser{
    constructor(x, y, r){
        var options ={
            restitution: 0.4,
            density: 1.2
            
        }
        //this.image = loadImage("images/LaserBeams.png");
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        //this.color = color(random(0, 255), random(0,255), random(0, 255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("red");
        push();
        translate(pos.x, pos.y);
       // imageMode(CENTER)
        //image(this.image, pos.x,pos.y, 100,10);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
    
        
 }
    
