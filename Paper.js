class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Matter.Bodies.circle(200,500,50,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        ellipseMode(CENTER);
        fill("pink");
        //strokeWeight(2);
        //stroke("yellow");
        ellipse(pos.x, pos.y,50);
    }
}