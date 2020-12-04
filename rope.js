class sling{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.05,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.posB=point2
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.posB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
    }
    
}