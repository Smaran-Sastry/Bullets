var bullet
var wall

var speed, weight, thickness 

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white";
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
  
}

function draw() {
  background(0);
  if(hasCollided(bullet,wall)){ 
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/22509;
    if(damage > 180){
      wall.shapeColor = "red"
    }
    if(damage < 180 && damage > 100){
    wall.shapeColor = "yellow"
  } 
    if(damage < 100){
    wall.shapeColor = "green"
  }
}
 
  drawSprites();
}
function hasCollided(){
  if(wall.x-bullet.x <= (bullet.width + wall.width)/2){
    return true;
  }
  else{
    return false;
  }
}