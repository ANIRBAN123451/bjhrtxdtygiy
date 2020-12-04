class character{
   constructor(x,y,width,height){

        this.image=loadImage("boy.png")
        this.image.scale=0.03;

        this.h=height
        this.w=width
        this.x=x
        this.y=y

   }

   display(){
       push();
       imageMode(CENTER)
       image(this.image,this.x,this.y,this.w,this.h)

       pop();
   }





}