class Rope {
    constructor(bodyA,bodyB,xoffset){
      var options ={
        bodyA : bodyA,
        bodyB : bodyB,
        pointB : {x : xoffset,y : 0}
    
      }
  
      this.sling = Constraint.create(options);
      this.xoffset = xoffset;
      World.add(world,this.sling);
  
   }
      
  
   
  
      display(){
  
       
       var pointA = this.sling.bodyA.position;
       var pointB = this.sling.bodyB.position;
       strokeWeight(4);
       stroke("white");
       line (pointA.x,pointA.y,pointB.x + this.xoffset,pointB.y);
        
  
      }
  
  
   }