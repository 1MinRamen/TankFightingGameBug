class Launcher{
    constructor(bodyA,pointB){
        var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.1,
          length: 5  
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    display(){
      if (this.launcher.bodyA){
      var posA = this.launcher.bodyA.position;
      var posB = this.pointB;
      push();
      stroke("green");
      line(posA.x, posA.y, posB.x, posB.y);
      pop();
      }
    }
    fly(){
      this.launcher.bodyA = null;
    }
}