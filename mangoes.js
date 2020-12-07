class fruit{
    constructor(x, y, width, height) {
        var op={
        isStatic:true,
        restitution:0,
        friction:1
      }
        this.body = Bodies.rectangle(x, y, width, height,op);
        this.image = loadImage("mango.png");
        World.add(world, this.body);

        this.width = width;
        this.height = height;
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
