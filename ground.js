class ground{
    constructor(x,y,z,v){
        this.body=Bodies.rectangle(x,y,z,v, {isStatic:true});
        World.add(world,this.body);

        this.width=z
        this.height=v
    }

    show(){
        rectMode(CENTER);
        rect( this.body.position.x , this.body.position.y, this.width, this.height ) ;
    }
  }