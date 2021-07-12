class Launcher{
    constructor(startA,startB){
    var options={
    bodyA:startA,
    pointB:startB,
    stiffness:0.4,
    lenght:1
    }
    this.launcher=Constraint.create(options)
    World.add(world,this.launcher)
    }
    display(){
        if(this.launcher.bodyA){
       

    line(this.launcher.pointB.x,this.launcher.pointB.y,this.launcher.bodyA.position.x,this.launcher.bodyA
        .position.y)
    
        }
    
    }
    fly(){
        this.launcher.bodyA=null;
    }
    attach(startA){
        this.launcher.bodyA=startA
    }
    }
    