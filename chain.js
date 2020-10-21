class chain {

    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
       bodyA: body1,
       bodyB: body2,
       lenght: 300,
       stiffness:0.4,
       pointB:{x: this.offsetX, y: this.offsetY}
    }
    
  this.c=Contrsint.create(options);

    World.add(world,this.c);
    
    
    
    }
    display(){
    
    line (this.c.bodyA.position.x,this.c.bodyA.position.y,this.c.bodyB.position.x+this.offsetX,this.c.bodyB.position.y+this.offsetY);
    
    }
    
   // Fly(){
       // this.c.bodyA=null;
   // }
    
    
    }