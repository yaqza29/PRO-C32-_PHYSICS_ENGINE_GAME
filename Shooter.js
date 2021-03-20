class Shooter extends BaseClass {
  constructor(){
    super(90,200,50,50);
    this.image = loadImage("gun.png");
    this.smokeImage = loadImage("smoke.png");
    this.trajectory =[];
  }
 
  display() {
    this.body.position.x = 140;
    this.body.position.y = 350;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
