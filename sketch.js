var car, wall 
var speed, weight
var rect 
function setup() {
  //Random speeds and weights
  speed = random(55, 90)
  car.velocityX = speed;
  weight = random(400, 1500)

  rect = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200)
  wall.shapeColor = "grey"
  createCanvas(1600,400,60, height/2);
  createSprite(400, 200, 50, 50);
}

function draw() {
  
  if(wall.x - car.x < (car.width + wall.width)/2){
    
    car.velocityX = 0
    var intenseCarCrash = 0.5*weight*speed*speed/22500
    if(intenseCarCrash < 100){
      car.shapeColor = color(0,255,0)
    }
    if(intenseCarCrash>180){
      car.shapeColor = color(230,230,0)
    }
    if(intenseCarCrash<180 && intenseCarCrash>100){
      car.shapeColor = color(255,0,0)
    }
    if(car.isTouching(wall)){
      car.velocityX = 0;
    }
  }
  background(255,255,255);  
  drawSprites();
}