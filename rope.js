class rope{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.07,
            length: 20
            
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.posB=point2
    }

    move(){
        this.sling.bodyA=null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.posB;
            strokeWeight(3);
        }
    }
    
}
