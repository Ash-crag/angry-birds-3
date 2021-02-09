class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingS = Constraint.create(options);
        World.add(world, this.slingS);
        this.pointB = pointB;
    }

    display(){
       if( this.slingS.bodyA){
        var pointA = this.slingS.bodyA.position;
        var pointB = this.pointB ;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
       }
    }
    
    fly(){
        this.slingS.bodyA = null 
    }
}