var car, wall;

var speed, weight, deformation;

function setup() {

  speed = random(55, 90);
  weight = random(400,1500);
  
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);

  car.velocityX = speed;

  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  if(
      car.x-wall.x < wall.width / 2 + car.width / 2 &&
      wall.x-car.x < wall.width / 2 + car.width / 2 
      
    ){ 
      car.velocityX = 0;
      car.x = 1445;
      deformation = (0.5 * weight * speed * speed) / 22500;

      if(deformation > 180){
        car.shapeColor = "red"
      }
      else 
      if(deformation < 100){
        car.shapeColor = "green"
      }
      else if(100 < deformation < 180){
        car.shapeColor = "yellow"
      }

    console.log(deformation)
      
    }
  


















  drawSprites();
}