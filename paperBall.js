class paperBall{
    constructor(x,y, r, options) {
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("cannonBall.png");
        World.add(world, this.body);
    }
    display() {
         var pos = this.body.position;

        push ();
        imageMode (CENTER);
        image (this.image,pos.x,pos.y,this.r,this.r);
        pop (); 
    }
}