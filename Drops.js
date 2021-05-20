class Drops {
constructor(x,y){

this.rain = Bodies.circle(x,y,5)

World.add(world,this.rain);

} 

Update(){
 
    if(this.rain.position.y>height){
  Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})

    }}

DisplayRainDrops(){
  fill("Blue");
ellipse(this.rain.position.x,this.rain.position.y,5,5)

   



}

}