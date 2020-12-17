var car, wall
var speed,weight

function setup() {
  createCanvas(1200,400);
  car= createSprite(50, 200, 50, 50);
  wall= createSprite(1000,200,60,height/2)
  wall.shapeColor=color(80,80,80)
  speed= random(55,90)
  weight= random(400,1500)
  car.velocityX= speed;

}

function draw() {
  background(0,0,0);  
  if (Touching(wall,car)){
    var df= (weight*speed*speed*0.5)/22500
    if (df<=100){
      car.shapeColor= color(0,255,0)
    }
    else if (100<=df<=180){
      car.shapeColor= color(230,230,0)
    }
    else if (df>180){
      car.shapeColor= color(255,0,0)
    }
  }




  drawSprites();
}