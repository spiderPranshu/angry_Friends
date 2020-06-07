class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/emoji.png");
    this.Visiblity = 255;

  }
  display(){ 
    if(this.body.speed<3){
      super.display();

    }
    else{
World.remove(world,this.body);
push();
this.Visibility=this.Visibility-2;
tint(255,this.Visibility);
image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
  }
}


score(){
  if (this.Visiblity<0 && this.Visibility>-1005){
    score++;
  }

}
};