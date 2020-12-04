class fruit{
    constructor(length,breadth,width,height){

        this.image=loadImage("mango.png");
        this.image.scale=0.8;

        this.h=height
        this.w=width
        this.x=length
        this.y=breadth
    }

    display(){
        push();

        imageMode(CENTER)
        image(this.image,this.x,this.y,this.w,this.h)
 
        pop();
    }

}